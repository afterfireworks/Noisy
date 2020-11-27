document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(sidenav, {
        edge: 'left',
        preventScrolling: 'true',
    });

    let tabs = document.querySelector('.tabs');
    let instances = M.Tabs.init(tabs);

    let materialboxed = document.querySelectorAll('.materialboxed');
    let instances = M.Materialbox.init(materialboxed);
});
