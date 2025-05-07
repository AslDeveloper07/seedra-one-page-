const buttonBurger = document.querySelector('#button-burger');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileOverlay = document.querySelector('#mobile-overlay');

buttonBurger.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--active');
  document.body.classList.toggle('disable-scroll');
  mobileOverlay.classList.toggle('mobile-overlay--active');
});

// Overlay bosilganda sidebarni yopish
mobileOverlay.addEventListener('click', () => {
  mobileMenu.classList.remove('mobile-menu--active');
  document.body.classList.remove('disable-scroll');
  mobileOverlay.classList.remove('mobile-overlay--active');
});

const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('tab--active'));
    tab.classList.toggle('tab--active');
  });
});

const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
  const accordionButton = accordion.querySelector('.accordion__header');

  accordionButton.addEventListener('click', () => {
    // Boshqa barcha accordionlarni yopamiz
    accordions.forEach((item) => {
      if (item !== accordion) {
        item.classList.remove('accordion--active');
      }
    });
    // Bosilganini ochamiz/yopamiz
    accordion.classList.toggle('accordion--active');
  });
});

function toggleMenu(header) {
  const menu = header.parentElement;
  const allMenus = document.querySelectorAll('.toggle-menu');

  // Close all other menus first
  allMenus.forEach(otherMenu => {
    if (otherMenu !== menu) {
      otherMenu.classList.remove('active');
    }
  });

  // Toggle the clicked menu
  menu.classList.toggle('active');
}

