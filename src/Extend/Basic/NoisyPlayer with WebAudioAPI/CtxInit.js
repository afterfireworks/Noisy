const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const source = audioCtx.createMediaElementSource(audio);
const analyser = audioCtx.createAnalyser();
const stereoPanner = audioCtx.createStereoPanner();
const delayGain = audioCtx.createGain();
const delayFilter = audioCtx.createBiquadFilter();
const delayTime = audioCtx.createDelay();
const reverb = audioCtx.createConvolver();
const masterVolume = audioCtx.createGain();
// convolver.buffer = await getImpulseBuffer(audioCtx)



// Master Chain
source.connect(analyser)
analyser.connect(stereoPanner)
stereoPanner.connect(masterVolume)
masterVolume.connect(audioCtx.destination)
// Delay Chain
stereoPanner.connect(delayFilter)
delayFilter.connect(delayGain)
delayGain.connect(delayTime)
delayTime.connect(delayGain)
delayGain.gain.value /= 2
delayGain.connect(delayTime)
delayTime.connect(delayGain)
delayGain.gain.value /= 4
delayGain.connect(delayTime)
delayTime.connect(audioCtx.destination)

// masterVolume.gain.value = 1

const Init = document.getElementById("init");
Init.addEventListener('click', () => {
    Init.style.transition = "all .6s"
    Init.style.marginLeft = "-100vw"
    audioCtx.resume().then(() => {
        console.log('Playback resumed successfully');
    });
})