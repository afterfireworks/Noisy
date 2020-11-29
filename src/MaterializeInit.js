document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    let sidenavinstances = M.Sidenav.init(sidenav, {
        edge: 'left',
        preventScrolling: 'true',
    });

    var scrollspy = document.querySelectorAll('.scrollspy');
    var scrollspyinstances = M.ScrollSpy.init(scrollspy,{
        scrollOffset: "100"
    });

    let tabs = document.querySelector('.tabs');
    let tabsinstances = M.Tabs.init(tabs);

    let materialboxed = document.querySelectorAll('.materialboxed');
    let materialboxedinstances = M.Materialbox.init(materialboxed);

    var fixedbtn = document.querySelectorAll('.fixed-action-btn');
    var fixedbtninstances = M.FloatingActionButton.init(fixedbtn,{
        direction: "left",
        toolbarEnabled: "false"
    });
});
