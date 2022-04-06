const smoothLinks = document.querySelectorAll('a[href^="#"]');
const initSmoothScroll = () => {
  smoothLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const header = document.querySelector('.header');
      if (header.classList.contains('header--opened')) {
        header.classList.remove('header--opened');
        document.body.style.overflow = '';
      }

      const id = link.getAttribute('href').slice(1);
      const headerHeight = header.clientHeight;
      const yOffset = -(headerHeight + 6);
      console.log(yOffset);

      const block = document.getElementById(id);
      const y = block.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    });
  });
};

export {initSmoothScroll};
