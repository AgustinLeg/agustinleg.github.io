const btnNav = document.querySelector(".toggle-nav");
const btnCloseNav = document.querySelector(".menu.close");
const navMain = document.querySelector(".nav-main");
const sections = document.querySelectorAll("section");
const targets = document.querySelectorAll(".target");
const targetsUP = document.querySelectorAll(".target__up");
const navItem = document.querySelectorAll(".nav-main__item");
const socialContainer = document.querySelector('.social__container')

const path = {
  cero: "M1.9,39.5c0-19.7,15.9-25.8,25.6-25.8c8.7,0,25.1,5.7,25.1,25.8v18.9c0,18.9-14.4,25.8-25.1,25.8c-10,0-25.6-6.6-25.6-25.8 V39.5z M19.2,58.9c0,4,1.3,10.1,8,10.1c8,0,8-8.1,8-10.1V39c0-2.1,0-10.1-8-10.1c-6.9,0-8,6.4-8,10.1V58.9z",
  uno: "M76.3,29.6H65.1V15h28.5v68H76.3V29.6z",
  dos: "M60.3,69.4c6.2-5.1,12.2-10.3,18.3-15.4c7.2-6,11.8-10.1,11.8-17.4c0-5.4-3.1-7.6-7.3-7.6c-6,0-6.9,5.8-7,10.7H59.6 c0.2-4.4,0.4-10,4-15.6c5.8-9,16-10.4,20.9-10.4c15.2,0,23.1,10.1,23.1,21c0,8.3-2.5,14.2-11.2,22.2c-4.1,3.8-8.3,7.5-12.5,11.4 h24.2v14.6H60.3V69.4z",
  tres: "M60.5,34.8c0.2-8.2,3.7-13.4,8.3-16.6c4.6-3.3,10.4-4.5,15-4.5c13.2,0,21.3,9,21.3,18.5c0,9.4-6.5,12.9-9,14.2 c12.8,4.3,12.8,14.1,12.8,16.4c0,11.8-11.5,21.3-25.2,21.3c-7.9,0-16.8-3-21.2-9.5c-3-4.4-3.5-9.5-3.8-12h17.5 c0.4,1.6,1.6,6.2,7.8,6.3c5.1,0,7.4-3.3,7.4-7.6c0-6.4-6.6-6.9-9.1-6.9h-6.2V41.7h2.9c1.6,0,8.5,0,8.5-6.8c0-2.9-1.4-6-4.8-6 c-5.1,0-5.2,4.2-5.3,5.9H60.5z",
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("body").classList.remove("page-loader");
    targets.forEach((target) => {
      target.style.animation = `anim1 ${target.dataset.delay}s  ease-out`;
      document.querySelector(".social__container").style.bottom = "0";
    });
  }, 5200);
  navItem.forEach((item) => {
    item.addEventListener("click", toggleNav);
  });
  btnNav.addEventListener("click", toggleNav);
});

function toggleNav() {
  btnCloseNav.classList.toggle("hide-menu");
  navMain.classList.toggle("active");
  document.body.classList.toggle("hidden");
  socialContainer.classList.toggle("show");
}

const numeroAnimacion = (targets, value) => {
  const timeline = anime.timeline({
    duration: 1000,
    easing: "easeOutExpo",
    baseFrequency: 0,
    scale: 1,
  });
  timeline.add({
    targets,
    d: [{ value }],
  });
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      if (entry.target.id == "proyectos") {
        numeroAnimacion("#numero", path.dos);
      } else {
        numeroAnimacion("#numero", path.cero);
      }
      if (entry.target.id == "contacto") {
        numeroAnimacion("#numero3", path.tres);
      } else {
        numeroAnimacion("#numero3", path.cero);
      }
    }
  });
};

const options = {
  rootMargin: "-200px",
};

const observer = new IntersectionObserver(callback, options);
sections.forEach((e) => observer.observe(e));

const upObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `anim2 2s ease`;
      }
    });
  },
  { roootMargin: "-100px" }
);

targetsUP.forEach((target) => {
  upObserver.observe(target);
});
