const initMenu = () => {
  const menu = document.querySelector('.header');
  const menuToggle = document.querySelector('.main-nav__toggle');

  menuToggle.addEventListener('click', () => {
    if (menu.classList.contains('header--opened')) {
      menu.classList.remove('header--opened');
      document.body.style.overflow = '';
    } else {
      menu.classList.add('header--opened');
      document.body.style.overflow = 'hidden';

      const links = document.querySelectorAll('.main-nav__link');
      links.forEach((link) => {
        link.addEventListener('click', () => {
          menu.classList.remove('header--opened');
          document.body.style.overflow = '';
        });
      });
    }
  });
};

export {initMenu};
