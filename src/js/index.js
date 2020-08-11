import '../scss/main.scss';

console.log('HELLO 👋')

//https://api.github.com/users/:username/repos

const projectsHTML = document.querySelector(".projects__wrapper--js");


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
}

fetch("https://api.github.com/users/misypniewski/repos")
  .then(resp => resp.json())
  .then(resp => {
    resp.forEach(item => {
      if (item.description != null) {
        projectsHTML.innerHTML += projectScheme(item.name, item.description, item.html_url, item.homepage);
      }

    });
  })
  .catch((error) => console.log(error));


