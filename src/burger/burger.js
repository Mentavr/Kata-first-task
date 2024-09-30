export const burger = () => {
  const burgerMenu = document.querySelector('#burger-menu');
  const burgerMenuOpenButton = document.querySelector('#burger-open-button');
  const burgerMenuCloseButton = document.querySelector('#burger-close-button');
  const backgroundMenu = document.querySelector('.burger-menu');

  burgerMenuOpenButton.addEventListener('click', () => {
    burgerMenu.classList.remove('menu-container_close');
    burgerMenu.classList.add('menu-container_open');

    backgroundMenu.classList.add('background-menu_open');
  });

  burgerMenuCloseButton.addEventListener('click', () => {
    burgerMenu.classList.remove('menu-container_open');
    burgerMenu.classList.add('menu-container_close');
    
    backgroundMenu.classList.remove('background-menu_open');
    backgroundMenu.classList.add('background-menu_close');
  });
};
