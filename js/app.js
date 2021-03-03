"use strict mode";

const images = [{
    "id": 1,
    "title": "Au Secours!",
    "summary": "A 1924 short silent comedy film directed by Abel Gance and written/starring Max Linder.",
    "width": 1048,
    "height": 1598,
    "localURL": "images/ausecours.png",
    "imgURL": "https://en.wikipedia.org/wiki/Au_Secours!",
    "imgCredit": "University of Oregon Libraries",
    "imgCreditUrl": "https://expo.uoregon.edu/spotlight/public-domain-day-2020/feature/au-secours"
  },
  {
    "id": 2,
    "title": "Battleship Potemkin",
    "summary": "A 1925 Soviet propoganda silent film directed by Sergei Eisenstein.",
    "width": 1200,
    "height": 1694,
    "localURL": "images/battleshippotemkin.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/Battleship_Potemkin",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://en.wikipedia.org/wiki/Battleship_Potemkin#/media/File:Vintage_Potemkin.jpg"
  },
  {
    "id": 3,
    "title": "Carmen",
    "summary": "A 1915 silent drama film directed by Raoul Walsh -- a founding member of the Motion Picture Academy.",
    "width": 568,
    "height": 848,
    "localURL": "images/carmen.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/Carmen_(1915_Raoul_Walsh_film)",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://upload.wikimedia.org/wikipedia/commons/0/01/Theda_Bara_Carmen_poster.jpg"
  },
  {
    "id": 4,
    "title": "Girl Shy",
    "summary": "Considered Harold Lloyd's departure from \"gag films\", it is a 1924 silent romantic comedy.",
    "width": 1149,
    "height": 2048,
    "localURL": "images/girlshy.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/Girl_Shy",
    "imgCredit": "Duke Law, The Center for the Study of the Public Domain",
    "imgCreditUrl": "https://web.law.duke.edu/cspd/publicdomainday/2020/"
  },
  {
    "id": 5,
    "title": "Greed",
    "summary": "The 1924 Erich von Stroheim epic starring ZaSu Pitts in its reconstructed glory running 239 minutes.",
    "width": 1212,
    "height": 1633,
    "localURL": "images/greed.png",
    "imgURL": "https://en.wikipedia.org/wiki/Greed_(1924_film)",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://en.wikipedia.org/wiki/Greed_(1924_film)#/media/File:Greed3.jpg"
  },
  {
    "id": 6,
    "title": "The Haunted House",
    "summary": "A 1921 silent comedy film starring Buster Keaton as an unsuspecting bank teller caught in the midst of a heist.",
    "width": 992,
    "height": 1500,
    "localURL": "images/hauntedhouse.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/The_Haunted_House_(1921_film)",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://en.wikipedia.org/wiki/The_Haunted_House_(1921_film)#/media/File:Haunted_house1921.jpg"
  },
  {
    "id": 7,
    "title": "Häxan",
    "summary": "Danish director Benjamin Christensen's 1922 silent horror essay film.",
    "width": 297,
    "height": 418,
    "localURL": "images/haxan.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/H%C3%A4xan",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://en.wikipedia.org/wiki/H%C3%A4xan#/media/File:Haxan_sv_poster.jpg"
  },
  {
    "id": 2,
    "title": "He Who Gets Slapped",
    "summary": "A 1924 silent psychological thriller based on a Russian play",
    "width": 503,
    "height": 798,
    "localURL": "images/hewhogetsslapped.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/He_Who_Gets_Slapped",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://en.wikipedia.org/wiki/He_Who_Gets_Slapped#/media/File:He_Who_Gets_Slapped.jpg"
  },
  {
    "id": 9,
    "title": "Les Vampires",
    "summary": "French director Louis Feuillade's magnum opus initially released as ten episodes between 1915 and 1916.",
    "width": 717,
    "height": 1001,
    "localURL": "images/lesvampires.jpg",
    "imgURL": "https://en.wikipedia.org/wiki/Les_Vampires",
    "imgCredit": "Wikimedia Commons",
    "imgCreditUrl": "https://commons.wikimedia.org/wiki/File:Lesvampiresposter.jpg"
  }
];

// all images inside the image modal content class


for (let i = 0; i < images.length; i++) {
  //constants declared in the order they're nested 
  const gallery = document.querySelector(".grid");
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const imgLink = document.createElement("a");
  const title = document.createElement("h3");
  const imgCreditURL = document.createElement("a");
  const imgCredit = document.createElement("p");
  const figCaption = document.createElement("figcaption");

  const modal = document.getElementsByClassName("modal");
  const modalImg = document.querySelector(".modalImg");

  img.src = `${images[i].localURL}`;
  img.alt = `${images[i].title}` + " Poster";
  img.width = "300";




  imgLink.href = `${images[i].imgURL}`;
  title.innerText = `${images[i].title}`;

  imgCreditURL.href = `${images[i].imgCreditUrl}`;
  imgCredit.innerText = `${images[i].imgCredit}`
  imgCreditURL.classList.add("creditURL");

  figCaption.innerText = `${images[i].summary}`;

  //appended in nested order 
  gallery.appendChild(figure);
  figure.appendChild(img);
  figure.appendChild(imgLink);
  figure.appendChild(imgCreditURL);
  imgCreditURL.appendChild(imgCredit);
  imgLink.appendChild(title);
  figure.appendChild(figCaption);

  // images[i].onclick = function () {
  //   modal.style.display = "block";
  //   modalImg.src = img.src;
  // };

  // function modalImg(images) {
  //   const expandImg = document.querySelector(".expandImg");
  //   expandImg.src = images.src;
  //   expandImg.parentElement.style.display = "block";
  // }

  const lightboxImages = document.querySelectorAll('.modal-content img');

// dynamically selects all elements inside modal popup
const modalElement = element =>
  document.querySelector(`.image-modal-popup ${element}`);

const body = document.querySelector('body');

// closes modal on clicking anywhere and adds overflow back
document.addEventListener('click', () => {
  body.style.overflow = 'auto';
  modalPopup.style.display = 'none';
});

const modalPopup = document.querySelector('.image-modal-popup');

// loops over each modal content img and adds click event functionality
lightboxImages.forEach(img => {
  img.addEventListener('click', e => {
    // let img = document.querySelectorAll("img");
    // img.src = `${images[i].localURL}`;
    body.style.overflow = 'auto';
    e.stopPropagation();
    modalPopup.style.display = 'block';
    modalElement('img').src = img.src;
  });
});
}



