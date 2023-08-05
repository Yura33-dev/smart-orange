const burgerMenu = (
  burgerBtnSelector,
  burgerMenuSelector,
  burgerMenuCloseSelector,
) => {
  const burgerBtn = document.querySelector(burgerBtnSelector);
  const burgerMenu = document.querySelector(burgerMenuSelector);
  const burgerBtnClose = document.querySelector(burgerMenuCloseSelector);

  const menuOpen = (target) => {
    if (target.closest(burgerBtnSelector)) {
      target
        .closest(burgerBtnSelector)
        .classList.toggle(burgerBtnSelector.slice(1) + '-active');

      burgerMenu.classList.toggle(burgerMenuSelector.slice(1) + '-active');
    }
  };

  const menuClose = (target) => {
    if (target.closest(burgerMenuCloseSelector)) {
      target
        .closest(burgerMenuSelector)
        .classList.toggle(burgerMenuSelector.slice(1) + '-active');
      burgerBtn.classList.toggle(burgerBtnSelector.slice(1) + '-active');
    }
  };

  //
  burgerBtn.addEventListener('click', (e) => menuOpen(e.target));
  burgerBtnClose.addEventListener('click', (e) => menuClose(e.target));
};

export default burgerMenu;
