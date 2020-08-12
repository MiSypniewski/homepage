import "../scss/main.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const date = new Date().toISOString().slice(0, 10);
const projectsWrapperHTML = document.querySelector(".projects__wrapper--js");

const width = window.innerWidth;
const animationSections = document.querySelectorAll(".animation--js");
const contactHTML = document.querySelector(".contact");
const heroHandHTML = document.querySelector(".hero__hand");
const heroBubbleHTML = document.querySelector(".hero__bubble");

if (width >= 768) {
  gsap.fromTo(heroBubbleHTML, { scale: 0 }, { scale: 1, transformOrigin: "0% 100%", duration: 0.3, delay: 0.5 });
  gsap.fromTo(
    heroHandHTML,
    { rotate: -10 },
    { rotate: 10, ease: "easeInOut", transformOrigin: "80% 80%", duration: 0.3, repeat: -1, yoyo: true }
  );

  animationSections.forEach((section) => {
    gsap.fromTo(
      section.children,
      { y: "+=100", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 0.8,
        ease: "easeInOut",
        scrollTrigger: { trigger: section, start: "top 40%" },
      }
    );
  });
}

gsap.fromTo(
  contactHTML.children,
  { y: "+=100", opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.3,
    duration: 0.8,
    ease: "easeInOut",
    scrollTrigger: { trigger: ".contact", start: "top 80%" },
  }
);

const projectScheme = (name, description, githuburl, homepage) => {
  return `<article class="project">
          <div class="project__bar">
            <span class="project__dot"></span>
            <span class="project__dot"></span>
            <span class="project__dot"></span>
          </div>
          <div class="project__box">
            <img class="project__logo" src="github_icon.svg" alt="" />
            <h3 class="project__title project__grid">
              <span class="project__label">project:</span>
              <span class="project__title project__title--special">${name}</span>
            </h3>
            <p class="project__grid">
              <span class="project__label">desctryption:</span>
              <span class="project__special">${description}</span>
            </p>
            <p class="project__grid">
              <span class="project__label">demo:</span>
              <span>&lt;<a class="project__link" href="${homepage}" title="podlski git - demo">see demo</a>&gt;</span>
            </p>
            <p class="project__grid">
              <span class="project__label">github:</span>
              <span>&lt;<a class="project__link" href="${githuburl}" title="podlski git - code">see code</a>&gt;</span>
            </p>
          </div>
        </article>`;
};

if (localStorage.getItem("date") !== date) {
  const projects = [];
  fetch("https://api.github.com/users/misypniewski/repos")
    .then((resp) => resp.json())
    .then((resp) => {
      resp.forEach((item) => {
        if (item.description != null) {
          projects.push(item);
          projectsWrapperHTML.innerHTML += projectScheme(item.name, item.description, item.html_url, item.homepage);
        }
        localStorage.setItem("projects", JSON.stringify(projects));
        localStorage.setItem("date", date);
      });
    })
    .catch((error) => console.log(error));
} else {
  const projects = JSON.parse(localStorage.getItem("projects"));
  projects.forEach((item) => {
    projectsWrapperHTML.innerHTML += projectScheme(item.name, item.description, item.html_url, item.homepage);
  });
}

console.log("HELLO 👋");
