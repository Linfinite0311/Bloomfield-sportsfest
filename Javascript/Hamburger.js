const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menuItems = document.querySelectorAll('nav .mainMenu li a');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
// Close menu when you click on a menu item
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        close();
    });
});

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}
