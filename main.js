"use strict";

// 스크롤을 이용한 투명 navbar
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--blue");
  } else {
    navbar.classList.remove("navbar--blue");
  }
});

// navbar 메뉴 눌렀을 때 화면 스크롤링
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

// contact me! 버튼을 눌렀을 때
const contactMe = document.querySelector(".home__btn");
contactMe.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// home 부분 스크롤링되면서 점점 투명해지게
const home = document.querySelector(".home__container");
const homeHieght = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHieght;
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
