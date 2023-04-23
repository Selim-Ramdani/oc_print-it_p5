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

// Déclaration des constantes nécessaires au bon fonctionnement du caroussel
const banner = document.getElementById("banner");
const imgSlide = document.getElementById("bannerImg");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

console.log(banner, imgSlide, arrowLeft, arrowRight);

arrowLeft.addEventListener("click", () => {
  console.log("Flèche gauche cliquée");
});

arrowRight.addEventListener("click", () => {
  console.log("Flèche droite cliquée");
});
