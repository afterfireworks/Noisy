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






















})()
