document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(sidenav, {
        edge: 'left',
        preventScrolling: 'true',
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelector('.tabs');
    let instances = M.Tabs.init(tabs);
});
document.addEventListener('DOMContentLoaded', function () {
    var materialboxed = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(materialboxed);
});