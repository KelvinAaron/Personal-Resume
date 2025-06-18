document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    document.getElementById("nav-links").classList.remove("show");
  });
});

const sliderImages = [
  "imgs/sc1.png",
  "imgs/sc2.png",
  "imgs/sc3.png",
  "imgs/sc4.png",
  "imgs/sc5.png",
  "imgs/sc6.png"
];

let slideIndex = 0;
const slideElement = document.getElementById("slide");

setInterval(() => {
  slideIndex = (slideIndex + 1) % sliderImages.length;
  slideElement.src = sliderImages[slideIndex];
}, 3000);
