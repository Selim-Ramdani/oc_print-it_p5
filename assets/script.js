// Tableau de propriétés CSS pour la gestion des couleurs en log
const styles = [
  "color: #fff",
  "background: #7F2727",
  "padding: 1px",
].join(";");

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Déclaration des constantes
const banner = document.getElementById("banner");
const imgSlide = document.getElementById("bannerImg");
const imgSlideContent = document.querySelector(".banner_img_text");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

function bulletPoints() {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  const dots = document.querySelector("#banner .dots");
  dots.appendChild(dot);
  const dotSelected = document.querySelector(".dots :first-child");
  dotSelected.classList.add("dot_selected");
}

slides.forEach(bulletPoints);

i = 0;

// Ajout d'un événement autour des flèches du slide
arrowLeft.addEventListener("click", () => {
  console.log("%cFlèche gauche cliquée", styles);
});
arrowRight.addEventListener("click", () => {
  console.log("%cFlèche droite cliquée", styles);
});

// Change dynamiquement la position du point en fonction de l'image en cours d'itération dans le slide
function activeBullet() {
  const dot = document.getElementsByClassName("dot");
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove("dot_selected");
  }
  dot[i].classList.add("dot_selected");
}
activeBullet();
