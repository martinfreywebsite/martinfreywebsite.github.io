// select the menu toggle and menu items
const menuToggle = document.querySelector('#menuToggle');
const menu = document.querySelector('#menu');

// add event listener to menu toggle
menuToggle.addEventListener('click', function() {
  // toggle the menu
  menuToggle.classList.toggle('open');
  menu.classList.toggle('open');
});

// select all menu items and add event listener to close menu on click
const menuItems = document.querySelectorAll('#menu li');
menuItems.forEach(function(menuItem) {
  menuItem.addEventListener('click', function() {
    // close the menu
    menuToggle.classList.remove('open');
    menu.classList.remove('open');
  });
});
