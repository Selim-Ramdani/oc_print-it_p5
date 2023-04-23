// Tableau de propriétés CSS pour la gestion des couleurs en log
const styles = ["color: #fff", "background: #7F2727", "padding: 1px"].join(";");

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

// Déclaration des constantes qui représentent les éléments du DOM que je souhaite selectionner
const banner = document.getElementById("banner");
const imgSlide = document.getElementById("bannerImg");
const imgSlideContent = document.querySelector(".banner_img_text");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

// Je stocke le tableau d'images dans une variable
const arrImg = slides.length;

// Fonction qui permet de créer un élément de type span que j'ajoute ensuite dans une classe existante du DOM
function bulletPoints() {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  const dots = document.querySelector(".dots");
  dots.appendChild(dot);
  const dotSelected = document.querySelector(".dots :first-child");
  dotSelected.classList.add("dot_selected");
}

// Crée un bullet point pour chaque élément de mon tableau d'images
slides.forEach(bulletPoints);

// Je crée une variable i que j'initialise à zéro et qui permet d'itérer dans le tableau d'images
let i = 0;

// Ajout d'un événement autour des flèches du slide
arrowLeft.addEventListener("click", () => {
  console.log("%cFlèche gauche cliquée", styles, slides[i].tagLine);
  goToPrevSlide();
});
arrowRight.addEventListener("click", () => {
  console.log("%cFlèche droite cliquée", styles, slides[i].tagLine);
  goToNextSlide();
});

// Fonction qui permet de changer dynamiquement les images présentent dans le slide ainsi que son texte correspondant
function displayImg() {
  imgSlide.src = `./assets/images/slideshow/${slides[i].image}`;
  imgSlideContent.innerHTML = slides[i].tagLine;
}

// Fonction qui en appelle 3 autres et qui permettent d'exécuter correctement la logique du slide
function goToPrevSlide() {
  if (i === 0) {
    i = arrImg - 1;
  } else {
    i--;
  }
  displayImg();
  activeBullet();
}

// Fonction qui en appelle 3 autres et qui permettent d'exécuter correctement la logique du slide
function goToNextSlide() {
  if (i === arrImg - 1) {
    i = 0;
  } else {
    i++;
  }
  displayImg();
  activeBullet();
}

// Change dynamiquement la position du point en fonction de l'image en cours d'itération dans le slide
function activeBullet() {
  const dot = document.getElementsByClassName("dot");
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove("dot_selected");
  }
  dot[i].classList.add("dot_selected");
}
activeBullet();
