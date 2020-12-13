document.addEventListener('DOMContentLoaded', function () {

    let sidenav = document.querySelectorAll('.sidenav');
    let sidenavinstances = M.Sidenav.init(sidenav, {
        edge: 'right',
        preventScrolling: true,
    });


    let dropdown = document.querySelectorAll('.dropdown-trigger');
    let dropdowninstances = M.Dropdown.init(dropdown, {
        // hover: true,
        coverTrigger: false,
        constrainWidth: true,
    });


    let slider = document.querySelectorAll('.slider');
    let sliderinstances = M.Slider.init(slider, {
        indicators:	false,
        interval: 5000,
    });


    let scrollspy = document.querySelectorAll('.scrollspy');
    let scrollspyinstances = M.ScrollSpy.init(scrollspy,{
        scrollOffset: 400,
    });


    let tooltipped = document.querySelectorAll('.tooltipped');
    let tooltippedinstances = M.Tooltip.init(tooltipped);


    let tabs = document.querySelector('.tabs');
    let tabsinstances = M.Tabs.init(tabs);


    let materialboxed = document.querySelectorAll('.materialboxed');
    let materialboxedinstances = M.Materialbox.init(materialboxed);


    let carouselSlider = document.querySelectorAll('.carousel-slider');
    let carouselSliderinstances = M.Carousel.init(carouselSlider, {
        fullWidth: false,
        indicators: true,
    });

    
    let parallax = document.querySelectorAll('.parallax');
    let parallaxinstances = M.Parallax.init(parallax);


    let fixedbtn = document.querySelectorAll('.fixed-action-btn');
    let fixedbtninstances = M.FloatingActionButton.init(fixedbtn, {
        toolbarEnabled: true,
    });
});
