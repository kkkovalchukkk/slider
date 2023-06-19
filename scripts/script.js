document.addEventListener("DOMContentLoaded", () => {
  // Дом-элементы
  const navLinks = document.querySelectorAll(".nav__link");
  const infoList = document.querySelectorAll(".info-list");
  const slides = document.querySelectorAll(".slides__img");
  const bullets = document.querySelectorAll(".slider-pagination__bullet");
  const arrowLeft = document.querySelector(".slider-navigation__arrow-left");
  const arrowRight = document.querySelector(".slider-navigation__arrow-right");

  // Константы
  const ACTIVE_NAV_LINK_CLASSNAME = "nav__link--active";
  const ACITVE_INFO_LIST_CLASSNAME = "info-list--active";
  const ACTIVE_SLIDE_CLASSNAME = "slides__img--active";
  const ACTIVE_BULLET_CLASSNAME = "slider-pagination__bullet--active";

  // Инициируемый индекс активного слайда
  let activeIdx = 0;

  // Сброс активного класса у всех дом-элементов
  const reset = () => {
    navLinks.forEach((link) => link.classList.remove(ACTIVE_NAV_LINK_CLASSNAME));

    infoList.forEach((list) => list.classList.remove(ACITVE_INFO_LIST_CLASSNAME));

    slides.forEach((slide) => slide.classList.remove(ACTIVE_SLIDE_CLASSNAME));

    bullets.forEach((bullet) => bullet.classList.remove(ACTIVE_BULLET_CLASSNAME));
  };

  function changeSlide(idx) {
    reset();

    navLinks[idx].classList.add(ACTIVE_NAV_LINK_CLASSNAME);
    slides[idx].classList.add(ACTIVE_SLIDE_CLASSNAME);
    infoList[idx].classList.add(ACITVE_INFO_LIST_CLASSNAME);
    bullets[idx].classList.add(ACTIVE_BULLET_CLASSNAME);
  }

  arrowLeft.addEventListener("click", () => {
    if (activeIdx === 0) {
      activeIdx = +slides.length - 1;
      changeSlide(activeIdx);
    } else {
      activeIdx--;
      changeSlide(activeIdx);
    }
  });

  arrowRight.addEventListener("click", () => {
    if (activeIdx === +slides.length - 1) {
      activeIdx = 0;

      changeSlide(activeIdx);
    } else {
      activeIdx++;
      changeSlide(activeIdx);
    }
  });

  bullets.forEach((bullet, idx) => {
    bullet.addEventListener("click", () => {
      activeIdx = idx;
      changeSlide(idx);
    });
  });

  navLinks.forEach((link, idx) => {
    link.addEventListener("click", () => {
      activeIdx = idx;
      changeSlide(activeIdx);
    });
  });

  changeSlide(activeIdx);
});
