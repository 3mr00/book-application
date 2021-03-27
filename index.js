const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const nav = document.querySelector(".sticky-navbar");
const logo = document.querySelector(".logo");
const dot = document.querySelector(".dot");


hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    hamburger.classList.toggle("toggle");
});

window.onscroll = function() {scrollFunction()};
nav.classList.remove("sticky-navbar");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky-navbar");
    logo.style.margin ="2% 3%";
    dot.style.margin ="1% 0%";

  } else {
    nav.classList.remove("sticky-navbar");

  }
}
