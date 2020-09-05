gsap.registerPlugin(MotionPathPlugin);

//Icon Animations
const icon = document.getElementById("icon");
const blackIcon = document.getElementById("black-icon");
const lightRedIcon = document.getElementById("light-red-icon");
const redIcon = document.getElementById("red-icon");
const darkRedIcon = document.getElementById("dark-red-icon");
const nav = document.querySelector("nav");

function iconOpen() {
  icon.classList.add("active");
  gsap.to(nav, 0.5, { y: "0%" });
  tl = gsap.timeline();
  tl.to(icon, 0.5, { rotate: 45, y: 10 })
    .to(blackIcon, 0.5, { x: -2, y: -10 }, "-=.5")
    .to(darkRedIcon, 0.5, { x: -2, y: -10 }, "-=.5");
}

function iconClose() {
  icon.classList.remove("active");
  if (window.innerWidth < 768) {
    gsap.to(nav, 0.5, { y: "100%" });
  }
  tl = gsap.timeline();
  tl.to(blackIcon, 0.5, { x: 0, y: 0 })
    .to(darkRedIcon, 0.5, { x: 0, y: 0 }, "-=.5")
    .to(icon, 0.5, { rotate: 0, y: 0 }, "-=.5");
}

$(icon).click(function () {
  if (!icon.classList.contains("active")) {
    iconOpen();
  } else {
    iconClose();
  }
});

//Cursor Animations
const mouse = document.querySelector(".cursor");
const textImg = document.querySelector("#text");
const button = document.querySelector("#button");

function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
  let xPosition = e.pageX + "px";
  let yPosition = e.pageY + "px";
}

function activeCursor(e) {
  const item = e.target;
  const h1s = document.getElementsByTagName("h1");
  //console.log(e.target.tagName);
  //console.log(e.target);

  if (item.classList.contains("ac") || item.tagName === "H3") {
    gsap.to(mouse, 0.5, {
      border: "1rem double #3F6DBC",
      padding: "1rem",
    });
  } else if (item.classList.contains("bc")) {
    gsap.to(mouse, 0.5, {
      border: "1rem solid black",
      padding: 0,
    });
  } else {
    gsap.to(mouse, 0.5, {
      border: "1rem solid #3F6DBC",
      padding: 0,
    });
  }
}

//Slide Animations

gsap.from("#intro", 1, { x: "-100%", delay: 0.5 });
gsap.to(".reveal-home", 2, { width: 0, delay: 0.5 });
gsap.to("#header-home", 1, { y: 0, delay: 0.5 });
gsap.to("nav", 0.75, { opacity: 1 });

function animateSections() {
  const sections = document.querySelectorAll(".ids");
  sections.forEach((section) => {
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        //pin: true,
        start: "10% 80%", // when the top of the trigger hits the top of the viewport
        end: "+=800", // end after scrolling 500px beyond the start
        scrub: 1,
        markers: { startColor: "green", endColor: "red", fontSize: "12px" },
        toggleActions: "play play restart restart",
      },
    });
    tl.from(section, 2.5, { y: "25%", scale: 0.9, opacity: 0 });
  });
}
animateSections();

//Nav
const galleryNav = document.querySelector("#gallery-nav");
const webNav = document.querySelector("#web-nav");
const contactNav = document.querySelector("#contact-nav");
const homeNav = document.querySelector("#home-nav");

function scrollTop() {
  gsap.to(window, 1, { scrollTo: 0 });
}

if (window.innerWidth < 768) {
  $(
    "#home-nav, #services-nav, #projects-nav, #gallery-nav, #contact-nav"
  ).click(() => {
    console.log("test");
    iconClose();
  });
}

const sections = document.querySelectorAll(".ids");
const navChildren = document.querySelectorAll("nav a");

navChildren.forEach((navChild) => {
  //console.log(navChild.hash);
  $(navChild).click((e) => {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: { y: `${navChild.hash}` } });
  });
});

function white() {
  const nav = document.querySelector("nav");
  const headerHome = document.querySelector("#header-home");

  if (window.scrollY > 0 && window.innerWidth >= 768) {
    nav.classList.add("white");
    headerHome.classList.add("white");
  } else {
    nav.classList.remove("white");
    headerHome.classList.remove("white");
  }
}

function navTop() {
  //console.log(nav.offsetTop);
  if (window.innerWidth >= 768) {
    gsap.to(nav, 0, { y: 0 });
    //console.log("navTop");
  }
}

//Event Listeners
window.addEventListener("resize", navTop);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
window.addEventListener("scroll", white);

//Gallery

function galleryCursor(e) {
  const item = e.target;
  if (item.classList.contains("art") && item.classList.contains("active")) {
    gsap.to(item, 0.5, { opacity: 1 });
    item.classList.remove("active");
  } else if (item.classList.contains("art")) {
    gsap.to(item, 0.5, { opacity: 0.25 });
    item.classList.add("active");
    //console.log("Gallery Active");
  }
}

window.addEventListener("click", galleryCursor);

//Projects

nyTl = gsap.timeline({ repeat: -1 });
nyTl.to("#nyt-type", 0, { opacity: 0 }, "+=.5");
nyTl.to("#nyt-type", 0, { opacity: 1 }, "+=.5");
nyTl;
