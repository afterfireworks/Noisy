(function () {
   
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

    function animateNav() {
        const nav = document.querySelector('nav');
        const navHeight = nav.offsetHeight;
        if (window.pageYOffset > navHeight) { return nav.classList.add('shadow') }
        nav.classList.remove('shadow')
    }

    window.addEventListener('scroll', () => {
        animateNav()
    })


    const togbtn = document.querySelector('.toggle-btn');
    const infocard = document.querySelector('.infocard');
    const cardcontent = document.querySelector('.card-content');
    togbtn.addEventListener('click', function () {
        infocard.classList.toggle('cardheight')
        cardcontent.classList.toggle('showall')
    })











})();
