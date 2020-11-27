(function () {

    function animateNav() {
        const nav = document.querySelector('nav');
        const navHeight = nav.offsetHeight;
        if (window.pageYOffset > navHeight) { return nav.classList.add('grey', 'darken-4', 'shadow') }
        nav.classList.remove('grey', 'darken-4', 'shadow')
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
