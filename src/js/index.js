import "../scss/main.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

console.log("HELLO 👋");
//https://api.github.com/users/:username/repos

const projectsWrapperHTML = document.querySelector(".projects__wrapper--js");

const animationSections = document.querySelectorAll(".animation--js");

const heroHandHTML = document.querySelector(".hero__hand");
const heroBubbleHTML = document.querySelector(".hero__bubble");

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

fetch("https://api.github.com/users/misypniewski/repos")
  .then((resp) => resp.json())
  .then((resp) => {
    resp.forEach((item) => {
      if (item.description != null) {
        projectsWrapperHTML.innerHTML += projectScheme(item.name, item.description, item.html_url, item.homepage);
      }
    });
  })
  .catch((error) => console.log(error));
