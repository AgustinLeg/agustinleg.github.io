const btnNav = document.querySelector(".toggle-nav");
const btnCloseNav = document.querySelector(".menu.close");
const navMain = document.querySelector(".nav-main");
const targets = document.querySelectorAll(".target");
const targetsUP = document.querySelectorAll(".target__up");
const navItem = document.querySelectorAll(".nav-main__item");
const cardContainer = document.querySelector(".card__container");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
  }, 5200);
  navItem.forEach((item) => {
    item.addEventListener("click", toggleNav);
  });
  btnNav.addEventListener("click", toggleNav);
  getData();
});

function toggleNav() {
  btnCloseNav.classList.toggle("hide-menu");
  navMain.classList.toggle("active");
  document.body.classList.toggle("hidden");
}

async function getData() {
  const response = await fetch("./js/data.json");
  const data = await response.json();
  showData(data);
}

function showData(data) {
  data.forEach((proyect, index) => {
    const {
      title,
      description,
      specialText,
      Speciallink,
      github,
      link,
      imageURL,
      technologies,
    } = proyect;
    const cardDiv = document.createElement("div");
    const cardLink = document.createElement("a");
    const cardLeft = document.createElement("div");
    const cardRight = document.createElement("div");
    const techDiv = document.createElement("div");
    const techList = document.createElement("ul");
    cardDiv.classList.add("card");
    cardLink.classList.add("card__link");
    cardLink.setAttribute("href", link);
    cardLink.setAttribute("target", "_blank");
    techDiv.classList.add("technologies");
    techList.classList.add("reset__list");
    techDiv.innerHTML = `<p class="order">0${index + 1}</p>`;
    technologies.forEach((tec) => {
      techList.innerHTML += `<li>${tec}</li>`;
    });
    techDiv.appendChild(techList);

    cardLeft.classList.add("card-left");
    cardLeft.innerHTML = `
    <p class="title">${title}</p>
    <p class="description">
      ${description}
      <a
        href=${Speciallink}
        target="_blank"
        rel="noopener noreferrer"
        class="color__tag hover-underline"
        >${specialText}</a
      >.
    </p>
    <div class="github">
      <a
        href=${github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        ><i class="fab fa-github"></i
      ></a>
    </div>
    `;

    cardRight.classList.add("card-right");
    cardRight.innerHTML += `
    <div class="card__img">
      <img src=${imageURL} alt="CaseShop Homepage" />
    </div>
    `;
    cardRight.appendChild(techDiv);
    cardLink.appendChild(cardLeft);
    cardLink.appendChild(cardRight);

    cardDiv.appendChild(cardLink);
    cardContainer.appendChild(cardDiv);
  });

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("button__container");
  btnDiv.innerHTML = `
  <button class="btn">
  <a
    href="https://github.com/AgustinLeg?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub Repositories"
    >Ver mas</a
  >
</button>
  `;

  cardContainer.appendChild(btnDiv);
}
