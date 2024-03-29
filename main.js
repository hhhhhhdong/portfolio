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
  navbarMenu.classList.remove("open");
});

// 토클버튼 토클
const toggleBtn = document.querySelector(".navbar__toggle-btn");
toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
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

// arrow up 버튼 스크롤하면 보이게 하기
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHieght) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});
arrowUp.addEventListener("click", () => {
  console.log("df");
  scrollIntoView("#home");
});

// project 필터링
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  // 클릭된 버튼에 색상주고 이전 버튼 색상 없애기
  const activeBtn = document.querySelector(".category__btn.selected");
  activeBtn.classList.remove("selected");
  const newActiveBtn =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  newActiveBtn.classList.add("selected");

  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
