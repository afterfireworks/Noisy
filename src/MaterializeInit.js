document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    let sidenavinstances = M.Sidenav.init(sidenav, {
        edge: 'left',
        preventScrolling: 'true',
    });

    var scrollspy = document.querySelectorAll('.scrollspy');
    var scrollspyinstances = M.ScrollSpy.init(scrollspy);

    let tabs = document.querySelector('.tabs');
    let tabsinstances = M.Tabs.init(tabs);

    let materialboxed = document.querySelectorAll('.materialboxed');
    let materialboxedinstances = M.Materialbox.init(materialboxed);
});
