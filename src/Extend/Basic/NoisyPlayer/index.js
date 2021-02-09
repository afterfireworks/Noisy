const SongArray = [
    ["WeLostTheSea-AGallantGentleman-LiveatStudios301.mp3", "WeLostTheSea.artist.jfif", "WeLostTheSea.ab03.jpg", "We Lost The Sea - A Gallant Gentleman - Live at Studios 301"],
    ["Senhuai-WaitingMan.mp3", "Senhuai-.jfif", "Senhuai-WaitingMan.artist.jpg", "詹森淮 - 他總是在那個路口"],
    ["NoPartyForCaoDong-Wayfarer.mp3", "NoPartyForCaoDong.artis.jpg", "NoPartyForCaoDong.abo1.jpg", "草東沒有派對 - 山海"],
    ["NoPartyForCaoDong-Devotion.mp3", "NoPartyForCaoDong.artis.jpg", "NoPartyForCaoDong.Devotion.jpg", "草東沒有派對 - 還願"],
    ["Vast&Hazy-IntheDark.mp3", "Vast&Hazy.artist.jpg", "Vast&Hazy.ep02.jpg", "Vast & Hazy - 無差別傷害"],
    ["Vast&Hazy-Waves.mp3", "Vast&Hazy.artist.jpg", "Vast&Hazy.ep01.jpg", "Vast & Hazy - 與浪之間"],
    ["Vast&Hazy-TheCityisEatingMeAlive.mp3", "Vast&Hazy.artist.jpg", "Vast&Hazy.ep01.jpg", "Vast & Hazy - 食人夢"],
    ["Vast&Hazy-ImNotOK.mp3", "Vast&Hazy.artist.jpg", "Vast&Hazy.ab01.jpg", "Vast & Hazy - 求救訊號"]
]

const audio = document.querySelector('audio');
const canvas = document.querySelector('canvas');

const Music = document.getElementById('music');
const PlayInfo = document.getElementById('playInfo');
const PlayProgressBar = document.getElementById("playProgressBar")
const CurTime = document.getElementById("curTime")
const FullTime = document.getElementById("fullTime")
const SongBook = document.getElementById('songBook');
const SongSelected = document.getElementById('songSelected');

const CtxSwitch = document.getElementById('ctxSwitch');
const ListSwitch = document.getElementById('listSwitch');
const ContorlsPanel = document.getElementById('contorlsPanel');
const CtxContorls = document.getElementById('ctxContorls');
const ListContorls = document.getElementById('listContorls');

const SongName = document.getElementById('songName')
const BtnPrev = document.getElementById("btnPrev");
const BtnPrevTime = document.getElementById("btnPrevTime");
const BtnPlay = document.getElementById("btnPlay");
const BtnStop = document.getElementById("btnStop");
const BtnNextTime = document.getElementById("btnNextTime");
const BtnNext = document.getElementById("btnNext");
const MusicVolume = document.getElementById("musicVolume");
const VolumeControl = document.getElementById("volumeControl");
const VolumeValue = document.getElementById("volumeValue");
const ArtistImg = document.getElementById("artistImg");
const AlbumImg = document.getElementById("albumImg");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// SongBook
// const SongSelect = document.getElementById('songSelect')
// function addSong() {
//     let list = "";

//     for (i = 0; i < SongSelect.length; i++) {
//         list = document.createElement('option');
//         list.className = 'bePick'
//         list.innerText = SongSelected.options[i].innerText.trim();
//         SongSelected.appendChild(list);
//     }

// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function isMobile() {
    try { document.createEvent("TouchEvent"); return true; }
    catch (e) { return false; }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ContorlsPanel Switch
ListSwitch.addEventListener('click', () => {
    let MmarginTop = listContorls.style.marginTop;

    if (MmarginTop === "-100vh") {
        listContorls.style.marginTop = "0px";
        listContorls.style.transition = "all .5s"
    } else {

        if (isMobile()) {
            PlayInfo.classList.toggle("notDesktop");
            ContorlsPanel.classList.toggle("visiable");
        } else {
            playInfo.classList.toggle("vw50");
            ContorlsPanel.classList.toggle("vw50");
        }
        listContorls.style.marginTop = "0px";
    }
})

CtxSwitch.addEventListener('click', () => {
    let MmarginTop = listContorls.style.marginTop;

    if (MmarginTop === "0px") {
        listContorls.style.marginTop = "-100vh";
        listContorls.style.transition = "all .5s"
    } else {
        if (isMobile()) {
            PlayInfo.classList.toggle("notDesktop");
            ContorlsPanel.classList.toggle("visiable");
        } else {
            playInfo.classList.toggle("vw50");
            ContorlsPanel.classList.toggle("vw50");
        }
        listContorls.style.marginTop = "-100vh";
    }

})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Ctx Contorl Slider
const StereoPanControl = document.getElementById("stereoPanControl");
const StereoPanValue = document.getElementById("stereoPanValue");

StereoPanControl.oninput = function () {
    stereoPanner.pan.value = StereoPanControl.value;
    StereoPanValue.innerHTML = StereoPanControl.value;
}

const GainControl = document.getElementById("gainControl");
const GainValue = document.getElementById("gainValue");

GainControl.oninput = function () {
    delayGain.gain.value = GainControl.value / 100;
    GainValue.innerHTML = GainControl.value;
}

const FilterControl = document.getElementById("filterControl");
const FilterValue = document.getElementById("filterValue");

FilterControl.oninput = function () {
    delayFilter.frequency.value = FilterControl.value;
    FilterValue.innerHTML = FilterControl.value;
}

const DelayControl = document.getElementById("delayControl");
const DelayValue = document.getElementById("delayValue");

DelayControl.oninput = function () {
    delayTime.delayTime.value = DelayControl.value;
    DelayValue.innerHTML = DelayControl.value;
}

// const ReverbControl = document.getElementById("reverbControl");
// const ReverbValue = document.getElementById("reverbValue");

// ReverbControl.oninput = function () {
//     reverb.value = ReverbControl.value;
//     ReverbValue.innerHTML = ReverbControl.value;
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Play Time Bar
PlayProgressBar.addEventListener('input', function () {
    audio.currentTime = this.value;
    setTime()
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Song Select & Change
function CreareSongBook() {
    let songbookStr = ""
    for (i = 0; i < SongArray.length; i++) {
        songbookStr += `<option>${SongArray[i][3]}</option>`
        // songbookStr += `<li id="${i}" onclick="getIndex()"><span>${SongArray[i][3]}</span></li>`
    }
    SongBook.innerHTML = songbookStr
}

function getIndex(e){
    e = this
    console.log(this)
    let Index = this.id
    return Index
    console.log(Index)
}
// const SSS = document.querySelectorAll('sss')

// SSS.forEach(function (sss){
//     sss.addEventListener("click", function() {
//             this.textContent = '更改';
//          });
// })
// for (let i = 0; i < SSS.length; i++) {
//     SSS[i].addEventListener("click", function() {
//         this.textContent = '更改';
//      });
//  }

SongBook.addEventListener('change', () => {
    let idx = SongBook.selectedIndex
    addSong(idx)
})

// SongSelect.addEventListener('dblclick', function (e) {
//     let event = e || window.e;
//     let target = e.target
//     let idx
//     if (target.nodeName.toLowerCase() != 'div') {
//         let parent = target.parentElement;
//         idx = Array.prototype.indexOf.call(parent.parentElement.children, parent);
//         console.log(idx)
//     } else ('div')
//     addSong(idx)
// })

// const Chooses = document.querySelectorAll('.Choose')

// Chooses.forEach(beChoose => {
//     beChoose.addEventListener('click',function(e){
//         let t = this; 
//         let parent = t.parentElement; 
//         let ancestor = t.parentNode.children;
//         let i = Chooses.prototype.indexOf(t,ancestor)
//         console.log(t)
//         console.log(parent)
//         console.log(ancestor)
//         // console.log(i)
//         // addSong(i)
//     })
// });

var listArr = []
var listStr = ""

function addSong(idx) {
    listArr.push(`<option ondblclick='removeSong()' value='${SongArray[idx][0]}' data-artistimgurl='${SongArray[idx][1]}' data-albumimgurl='${SongArray[idx][2]}'>${SongArray[idx][3]}</option>`)
    ////<option ondblclick='removeSong()' value="" data-artistImgUrl="" data-albumImgUrl=""></option>
}

function removeSong() {
    let idx = SongSelected.selectedIndex;
    SongSelected.options.remove(idx);
    listArr.splice(idx, 1)
    arrToStr()
}

function arrToStr() {
    listStr = listArr.join().replace(",", "")
    if (listStr !== "") {
        songSelected.innerHTML = listStr
    }
    listStr = ""
}

SongSelected.addEventListener('change', function () {
    SongChange(SongSelected.selectedIndex)
})

function SongChange(index) {
    Music.src = "src\\music\\" + SongSelected.options[index].value;
    SongSelected.options[index].selected = true;
    btnPlay.innerHTML = "<i class=" + "material-icons" + ">pause</i>";
    audio.load();
    audio.play();
    setImage(SongSelected.options[index]);
    setName(index);
    setTime();
    setToLeft(0)
}

const SongList = document.getElementById('songList')
const ToSongBook = document.getElementById('toSongBook')
const ReturnAndFresh = document.getElementById('returnAndFresh')

ToSongBook.addEventListener('click', () => {
    SongList.style.transform = "rotateY(180deg)"
})
ReturnAndFresh.addEventListener('click', () => {
    arrToStr()
    SongList.style.transform = "rotateY(0deg)"
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Set Song Name & Image
function setName(index) {
    Music.title = SongSelected.options[index].innerText;
    SongName.innerHTML = Music.title;
}

function setImage(input) {
    AlbumImg.src = "src\\music\\" + input.dataset.albumimgurl
    ArtistImg.src = "src\\music\\" + input.dataset.artistimgurl
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Set Time Info
function setTime() {
    let AudioCurTime, AudioFullTime

    audio.onloadedmetadata = function () {
        AudioCurTime = Math.floor(audio.currentTime)
        AudioFullTime = Math.floor(audio.duration)
        PlayProgressBar.max = AudioFullTime
        CurTime.innerHTML = numToTime(AudioCurTime)
        FullTime.innerHTML = numToTime(AudioFullTime)
    }

    setInterval(() => {
        AudioCurTime = Math.floor(audio.currentTime);
        setTimeShow(AudioCurTime);
        setToLeft(AudioCurTime)
        PlayProgressBar.value = AudioCurTime;

        if (AudioCurTime === AudioFullTime) {
            (RandomSwitch.classList.contains("active")) ? SongRandom() : (RepeatOneSwitch.classList.contains("active")) ? RepeatOne() : (RepeatAllSwitch.classList.contains("active")) ? RepeatAll() : SongJump(1);
        }
    }, 1000)
}

function setToLeft(T) {
    progressBG = (T / audio.duration * 100) + "%";
    PlayProgressBar.style.backgroundImage = "-webkit-linear-gradient(left, rgb(141, 43, 41), rgb(141, 43, 41) " + progressBG + ", rgb(66, 66, 66) 0,rgb(66, 66, 66))";
}

function setTimeShow(T) {
    CurTime.innerHTML = numToTime(T)
}

function numToTime(T) {
    let min = Math.floor(T / 60);
    let sec = T % 60;
    function addZero(num) {
        return num < 10 ? "0" + num : String(num)
    }
    return addZero(min) + ":" + addZero(sec);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// play btns
function PlayPause() {
    if (audio !== null) {
        if (audio.paused) {
            audio.play();
            setName(0)
            setTime()
            btnPlay.innerHTML = "<i class=" + "material-icons" + ">pause</i>";
        } else {
            audio.pause();
            btnPlay.innerHTML = "<i class=" + "material-icons" + ">play_arrow</i>";
        }
    }
}

function Stop() {
    // audio.pause();
    // audio.currentTime = "0";
    audio.load();
    btnPlay.innerHTML = "<i class=" + "material-icons" + ">play_arrow</i>";
}

function ChangeTime(s) {
    audio.currentTime += s
}

function SongJump(n) {

    if (RandomSwitch.classList.contains("active")) {
        SongRandom()
    } else {
        let indexChange = SongSelected.selectedIndex + n;

        if (indexChange === (SongSelected.length)) {
            SongChange(0)
        }
        if (indexChange === -1) {
            SongChange(SongSelected.length - 1)
        }
        SongChange(indexChange)
    }
    setToLeft(T)
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// repeat btns
const RandomSwitch = document.getElementById('randomSwitch');
const RepeatOneSwitch = document.getElementById('repeatOneSwitch');
const RepeatAllSwitch = document.getElementById('repeatAllSwitch');

RandomSwitch.addEventListener('click', function () {
    this.classList.toggle('active')
    RepeatOneSwitch.classList.remove('active')
    RepeatAllSwitch.classList.remove('active')
})

function SongRandom() {
    let r = Math.round(Math.random() * SongSelected.length)
    SongChange(r)
    console.log(r)
}

RepeatOneSwitch.addEventListener('click', function () {
    this.classList.toggle('active')
    RandomSwitch.classList.remove('active')
    RepeatAllSwitch.classList.remove('active')
})

function RepeatOne() {
    audio.currentTime = 0;
    audio.play()
}

RepeatAllSwitch.addEventListener('click', function () {
    this.classList.toggle('active')
    RandomSwitch.classList.remove('active')
    RepeatOneSwitch.classList.remove('active')
})

function RepeatAll() {
    ((SongSelected.selectedIndex + 1) === SongSelected.length) ? SongChange(0) : SongJump(1)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Volume Contorl
function VolumeSwitch() {
    // audio.muted = audio.muted == true ? false : true 
    audio.muted = !audio.muted;
    MusicVolume.textContent === "volume_up" ? MusicVolume.innerHTML = "volume_off" : MusicVolume.innerHTML = "volume_up"
}

VolumeControl.oninput = function () {
    masterVolume.gain.value = this.value / 100;
    VolumeValue.innerHTML = this.value;
    masterVolume.gain.value === 0 ? MusicVolume.innerHTML = "volume_off" : MusicVolume.innerHTML = "volume_up"
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  init
function indexInit() {
    CreareSongBook()
    setImage(music);
    SongName.innerHTML = Music.title;
}

indexInit()
