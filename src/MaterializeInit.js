document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    let sidenavinstances = M.Sidenav.init(sidenav, {
        edge: 'left',
        preventScrolling: 'false',
    });

    let scrollspy = document.querySelectorAll('.scrollspy');
    let scrollspyinstances = M.ScrollSpy.init(scrollspy);

    
    let pushpin = document.querySelectorAll('.pushpin');
    let pushpininstances = M.Pushpin.init(pushpin);
     

    let tabs = document.querySelector('.tabs');
    let tabsinstances = M.Tabs.init(tabs);

    let materialboxed = document.querySelectorAll('.materialboxed');
    let materialboxedinstances = M.Materialbox.init(materialboxed);

    let carouselSlider = document.querySelectorAll('.carousel-slider');
    let carouselSliderinstances = M.Carousel.init(carouselSlider, {
        fullWidth: true,
        indicators: true,
    });

    let parallax = document.querySelectorAll('.parallax');
    let parallaxinstances = M.Parallax.init(parallax);

    let fixedbtn = document.querySelectorAll('.fixed-action-btn');
    let fixedbtninstances = M.FloatingActionButton.init(fixedbtn, {
        // direction: "left",
        toolbarEnabled: "ture"
    });
});
