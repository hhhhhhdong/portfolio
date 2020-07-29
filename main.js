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
