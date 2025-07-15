 // Exercice 1. Les types de variable en JS

        // let a= 0; // number
        // let b= true; // Boolean
        // let c = 2 - 1.2; //number
        // let d ='hello'; // String
        // let e = 'bonjour' + 4; // String
        // let f = { a: 0.4 }; // Object 
        // let g = [ 'a', 'b', 'c' ]; // Array, Object

        // console.log(typeof(g));

        // Exercice 2. Sur la déclaration des variables

        // var monNombre = 4;
        // var maChaine = 'bonjour ! :-)';
        // var monBooleen = false;
        // var sansValeur;

        // var monNombre = 4;
        // var maChaine = 'bonjour ! :-)';
        // var monBooleen = false;
        // var sansValeur;

        // // Vérification des variables
        // console.log(monNombre === 4); // Devrait afficher true si monNombre vaut 4
        // console.log(maChaine === 'bonjour ! :-)'); // Devrait afficher true si maChaine contient 'bonjour ! :-)'
        // console.log(monBooleen === false); // Devrait afficher true si monBooleen vaut false
        // console.log(sansValeur === undefined); //

        // alert(sansValeur === undefined)

        //EXERCICE 3 sur  les structures conditionnelle
        
        // alert("Ci-dessous, ajoutez ce que vous voulez me dire: - Bonjour");
        // let answer = prompt("écris ce que tu veux : "); 

        // if (answer == "Bonjour") {
            
        //     alert("Bonjour mon ami, comment vas-tu?");

        //     let answer2 = prompt("");
        //     if (answer2 === "Je vais bien") {
        //             alert("Cool ça, à bientot!")
        //         } else if (answer2 === "Je ne vais pas bien") {
        //             alert ("Désolé pour toi, ça ira mieux un autre jour")
        //         } else {
        //         alert("Désolé, je n'ai pas compris")
        //     };
        
            
        // } else if (answer == "Tu vas bien?") {
            
        //     alert(" Bien et toi? ");

        //     let answer2 = prompt("");
        //     if (answer2 === "Je vais bien") {
        //         alert("Cool ça, à bientot!")
        //     } else if (answer2 === "Je ne vais pas bien") {
        //         alert ("Désolé pour toi, ça ira mieux un autre jour")
        //     } else {
        //     alert("Désolé, je n'ai pas compris")
        //     };
        //  }
        
        //  else {
        //     alert("Désolé, je n'ai pas compris")
        //  };

//EXERCICE 4 sur  les boucles : FizzBuzz

// for (let i=1; i<20; i++) {
//     console.log(i)
// }

// for ( let monNombre = 1; monNombre < 200; monNombre++ ) {
    
//     if (monNombre%5 === 0 && monNombre%3 === 0 ) {
//         console.log("Fizz")
//     } 
//     else if (monNombre%3 === 0)  {
//         console.log("Buzz")
//     } 
//     else if (monNombre%5 === 0 ) {
//         console.log("FizzBuzz")
//     }
//     else {
//         console.log( monNombre )
//     }
// }

// en ternaire

// for (let i = 1; i < 200; i++) {
//   console.log(
//     i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" :
//     i % 3 === 0 ? "Fizz" :
//     i % 5 === 0 ? "Buzz" :
//     i
//   );
// }

// EXERCICE SUR LES FONCTIONS

// •	Une fonction diviserParDeux qui retourne la moitié de la valeur passée en paramètre. Tests : 
// o	diviserParDeux(2) === 1;
// o	diviserParDeux(4) === 2;
// o	var n = Math.random(); diviserParDeux(n) === n / 2;

// function diviserParDeux(n) {
//      n = n/2;
//     return n
// };

// let i = diviserParDeux(6);
// console.log(i)

// •	Une fonction somme qui retourne la somme des deux paramètres qui lui seront passés. Tests : 
// o	somme(1, 1) === 2;
// o	somme(1, 2) === 3;
// o	somme(2, 1) === 3;
// o	var n = Math.random(); somme(n, 1) === n + 1;

// function somme(a,b) {
//     n= a+b;
//     return n
// }

// let ii= somme(78,5.36547)
// console.log(ii)

// let hasard = Math.random();
// console.log(hasard);

// EXERCICE 7 SUR LES TABLEAUX

// Exercice 7. A. : Calendrier
 
// let jours = ['lun', '007', 'mer', 'jeu', 'ven', 'sam', 'BUG' ];
// jours.pop();
// console.log(jours);
// jours.push('dim');
// console.log(jours);
// jours[1] = 'mar';
// console.log(jours);
// console.log(jours.length);
// console.log(jours[2]);
// console.log(jours[jours.length -1]);


// // Exercice 7. B. : Épicerie

// var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];

// for (let a=0; a < 5; a++ ){ // J'ai mis cette boucle juste pour voir l'évolution de mon tableau
//     alert("Voici la liste des fruits dispo : " + fruits.join(", ") );
//     alert("Saisissez dans le formulaire suivant votre fruits préféré")
//     let choixClient = prompt();
//     console.log(choixClient);
//     let fruitTrouve = false;

//         for (let i=0; i < fruits.length; i++) {
//             if(choixClient.toLowerCase() === fruits[i].toLowerCase() ) {
//                 console.log(fruits);
//                 fruitTrouve = true;
//                 fruits.splice(i,1)
//                 console.log(fruits);
//                 alert("ok");
//                 break;
//             }  
//         }
//         if (!fruitTrouve){
//                 alert("Indisponible");
//             }
//         console.log(fruits);
// }7

// // Exercice 7. C. : Pendu
// let mauvaisesLettres = [ ]; // sera complété pendant le jeu
// let lettresAttendues = [ 's', 'u', 'p', 'e', 'r' ];


// for (let i=0; mauvaisesLettres.length < 10; i++) {
//     alert("Veuillez entrez votre réponse");
//     let choixJoueur = prompt();
    
//     if (lettresAttendues.indexOf(choixJoueur) !== -1) {
//         lettresAttendues.splice(lettresAttendues.indexOf(choixJoueur),1);
//         console.log(lettresAttendues);
//     } else {
//         mauvaisesLettres.push(choixJoueur);
//         console.log(choixJoueur);
//         console.log(mauvaisesLettres);
//     }
//     if(lettresAttendues.length === 0 ){
//         alert("Bravo, tu as gagné");
//         break;

//     } else if (mauvaisesLettres.length === 10){
//         alert("Tu as perdu")
//     }
// }

// EXERCICE 8 SUR LES OBJETS

// Exercice 7. A. : Annuaire téléphonique

let annuaire = {
    Patricia: '06 66 66 66 66',
    David: '07 77 77 77 77',
    Simon: '07 32 51 21 2',
    Salomé: '08 22 26 65',
    Victoria: '02 35 46 7',
};

// let searchUser =prompt(" Veuillez saisir le prénom dont vous cherchez le numéro : ");
// searchUser = searchUser.charAt(0).toUpperCase() + searchUser.slice(1).toLowerCase(); // Pour gérer les majuscules et les miniscules des saisies user. Voir le doc Brouillon JS
// alert(
//     annuaire[searchUser] ? 
//     `le numéros de ${searchUser} est le: ${annuaire[searchUser]}` : 
//     `Désolé le numéro de ${searchUser} n'existe pas dans notre répértoire`
// );


///// Correction de l'exercice sur la POO et l'instanciation

// class Etudiant {
//     constructor(nom, age, poids) {
//         this.nom = nom;       // Propriété nom
//         this.age = age;       // Propriété age
//         this.poids = poids;   // Propriété poids
//     }

//     presenter() {
//         // Méthode pour afficher une présentation de l'étudiant
//         alert(`L'étudiant s'appelle ${this.nom}. Il a ${this.age} ans et pèse ${this.poids} kg.`);
//     }
// }

// // Instanciation d’un objet de la classe
// let etudiant1 = new Etudiant('Patience', 20, 60);

// // Appel de la méthode
// etudiant1.presenter();

// Correction de la partie A de l'exercice 9 sur le DOM

// let h1 = document.querySelector('h1');
// h1.textContent = "Ma page de test Java Script pour le cours de la formation";
// console.log(h1);

// SECTION 2 : Exercice 9 B DOM : Récupération des valeurs du formulaire

// let inputNom = document.querySelector('.nom');
// let inputPrenom = document.querySelector('.prenom');
// inputNom.value = "Fort";
// inputPrenom.value = "Sim";

// alert(inputNom.value);
// alert(inputPrenom.value);

// SECTION 3 : Exercice 9 C DOM : Calculatrice (Onclik + récup value form)

let premierNombre = document.querySelector(".premierNombre");
let deuxiemeNombre = document.querySelector(".deuxiemeNombre");
let button = document.querySelector(".button")
let resultat = document.querySelector(".resultat");

button.onclick = function (){

    let chiffreUn = parseFloat(premierNombre.value); 
    let chiffreDeux = parseFloat(deuxiemeNombre.value);

    if (isNaN(chiffreUn) || isNaN(chiffreDeux) ) {
        premierNombre.value="";
        deuxiemeNombre.value ="";
        resultat.value = "Que des chiffres svp";

  } else {
        resultat.value = `${chiffreUn} + ${chiffreDeux} est égale à ${chiffreUn + chiffreDeux}`;
        premierNombre.value="";
        deuxiemeNombre.value ="";
    }
   
}

// SECTION 4 : Exercice 10 A DOM : Cacher ou afficher un élément html

// let para2 = document.querySelector ('#second');
// console.log(para2);
// para2.classList.remove('hidden');
// console.log(para2);
         
// SECTION 5 : Exercice 10 B DOM : Cacher le Spoiler

let section5 = document.querySelector(".section5");
let buttonCacher = section5.querySelector(".cacher");
let buttonAfficher = section5.querySelector(".afficher")

// première possibilité un peu plus compliqué mais pas bon pour la maintenabilité
let para = section5.querySelectorAll("p");
buttonCacher.onclick = () => {    
    for (let i=0; i < para.length ; i++) {
        if(i === 1 || i === 2) {
            para[i].classList.remove('spoiler');
            para[i].classList.add('hidden');
        }
    }
}
buttonAfficher.onclick = () => {    
    for (let i=0; i < para.length ; i++) {
        if(i === 1 || i === 2) {
            para[i].classList.remove('hidden');
            para[i].classList.add('spoiler');
        }
    }
}

// Deuxième possiblité plus maintanable quand on est emmener à ajouter d'autres p
let spoiler = section5.querySelectorAll(".spoiler")
console.log(spoiler)
buttonCacher.onclick = function() {
        for (let i=0 ; i < spoiler.length ; i++) {
            spoiler[i].classList.remove('spoiler');
            spoiler[i].classList.add('hidden');
    }
}
buttonAfficher.onclick = function() {
        for (let i=0 ; i < spoiler.length ; i++) {
            spoiler[i].classList.remove('hidden');
            spoiler[i].classList.add('spoiler');
    }
}
// SECTION 6 : Exercice 10 C DOM : Filtrage par catégorie
let articles = document.querySelectorAll("article");
let titreArticles = document.querySelector(".titreArticles");
let titreFruits = document.querySelector(".titreFruits");
let titreLegumes = document.querySelector(".titreLegumes");
let titreTubercules = document.querySelector(".titreTubercules");
let titreLegumineuses = document.querySelector(".titreLegumineuses");
let titreCereales = document.querySelector(".titreCereales");

articles.forEach(function (element) {
            element.style.display = "none";
    }  
)
titreArticles.onclick = function() {    
    articles.forEach(function (element, index) {
                element.style.display = "block";
            })
}
titreFruits.onclick = function() {     
    articles.forEach(function (element, index) {
        element.classList.contains("fruit") || 
        element.classList.contains("legume_fruit") ||
        element.classList.contains("fruit_legume")? element.style.display = "block" : element.style.display = "none";  
   }); 
}
titreLegumes.onclick = function() {     
    articles.forEach(function (element, index) {  
            element.classList.contains("legume") || 
            element.classList.contains("legume_fruit")||
            element.classList.contains("tubercule_legume")||
            element.classList.contains("legumineuse_legume") ||
            element.classList.contains("cereale_legume")||
            element.classList.contains("fruit_legume") ?
            element.style.display = "block" : element.style.display = "none";
   });  
}
titreTubercules.onclick = function() {     
    articles.forEach(function (element, index) {
        element.classList.contains("tubercule") || element.classList.contains("tubercule_legume") ? element.style.display = "block": element.style.display = "none";  
   });
}
titreLegumineuses.onclick = function() {     
    articles.forEach(function (element) {
        element.classList.contains("legumineuse") || element.classList.contains("legumineuse_legume") || element.classList.contains("legumineuse_cereale") ? element.style.display = "block": element.style.display = "none";  
   });
}
titreCereales.onclick = function() {     
    articles.forEach((element) => {
       element.classList.contains("cereale") || element.classList.contains("cereale_legume") ? element.style.display = "block" : element.style.display = "none";
   });  
}

//Installation et Utilisation de Sweet Alert
let btnSweetAlert = document.querySelector(".btnSweetAlert");
btnSweetAlert.onclick = function(){
    swal("Bonjour sweet alert heheehe ");
}

// SECTION 8 Exercice 12 A : Caroussel  ==> Composant Web

let imgs = [
    "https://medias.reussir.fr/action-agricole-picarde/styles/normal_size/azblob/2023-11/GN2OX9OF1_web.jpg?itok=kZtaCjDn" ,
    "https://www.shutterstock.com/shutterstock/photos/2141866355/display_1500/stock-photo-portrait-of-an-african-worker-in-the-nursery-happy-in-the-greenhouse-looking-at-camera-2141866355.jpg", 
    "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/f/8/cf8ee0537a_121131_agriculture-bio-france.jpg",
    "https://www.shutterstock.com/shutterstock/photos/1799476213/display_1500/stock-photo-peruvian-woman-working-on-vegetable-plantation-on-spring-day-carrying-plastic-box-with-freshly-1799476213.jpg",
    "https://media.istockphoto.com/id/1278596068/fr/photo/jeune-jardinier-f%C3%A9minin-heureux-affichant-la-r%C3%A9colte-riche-des-l%C3%A9gumes.jpg?s=2048x2048&w=is&k=20&c=1LDFLQYSF1OXzB4tFWTRX_g9MDGrJNsjHuSeNfmVNvc=",
    "https://media.istockphoto.com/id/949395206/fr/photo/agriculteur-r%C3%A9colte-des-feuilles-de-laitue.jpg?s=2048x2048&w=is&k=20&c=k6hFSFLaFWz6cWhIkcWBCH9xnFP7En0Gpb0EiPtVsIg=",
    "https://www.shutterstock.com/shutterstock/photos/2198300493/display_1500/stock-photo-skilled-african-american-horticulturist-harvesting-young-and-tender-leaves-of-green-chard-in-farm-2198300493.jpg",
    "https://media.istockphoto.com/id/1149217196/fr/photo/agriculteur-contr%C3%B4lant-des-semis-de-tomate-avec-la-tablette-num%C3%A9rique-dans-la-serre-chaude.webp?s=2048x2048&w=is&k=20&c=7Ym-gwsqzULM3_pMGt1g6NtO3m4JD6IVqlZqJ8C0Viw=",
    "https://media.istockphoto.com/id/498799522/fr/photo/homme-souriant-dans-les-vignobles.webp?s=2048x2048&w=is&k=20&c=fsA2N1SoOhOxCCDlO5B-E6LdIZ0y1MKTCxcqnii7dYc=",
    "https://media.istockphoto.com/id/1690922108/fr/photo/agricultrice-travaillant-dans-le-jardinage-un-jardinier-collecte-un-panier-de-l%C3%A9gumes.jpg?s=2048x2048&w=is&k=20&c=oj3Nk3peqka4yQYNb9LQS03oyuazhhma2bu8qcOXIZ8=",
    "https://www.shutterstock.com/shutterstock/photos/2208176163/display_1500/stock-photo-african-american-standing-in-garden-he-s-holding-crate-of-ripe-peaches-2208176163.jpg",

]
let img1 = document.querySelector(".imgCaroussel1");
let img2 = document.querySelector(".imgCaroussel2");
img1.setAttribute("src", imgs[0] );
img2.setAttribute("src", imgs[0] );
let btnNext = document.querySelector(".btnNext");
let btnPrevent = document.querySelector(".btnPrevent");
let btnStart = document.querySelector(".btnStart");
let btnStop = document.querySelector(".btnStop");
let lien = img1.getAttribute("src");

// Première solution pas optimisée

// Bouton next
let j = 0
btnNext.onclick = () => {
imgs.forEach((element)=> {
    if( lien === element) {
         j += 1,
        img1.setAttribute("src", imgs[j])
    } else if ( img1.getAttribute("src") === imgs[imgs.length -1] ) { // ou i === 10
        img1.setAttribute("src", imgs[10])
        j = -1;
    }
})
}

// Bouton Prevent
a = 11;
btnPrevent.onclick = () => {
    imgs.forEach((element)=> {
        if( lien === element) {
            a = a-1
            img1.setAttribute("src", imgs[a])
        } else if ( a === 0 ) { // ou img1.getAttribute("src") === imgs[0]
            img1.setAttribute("src", imgs[0])
            a = 11;
        }
    })
}

// Deuxième solution optimisée avec modulo %

// Bouton next
// let i = 0;
// img1.setAttribute("src", imgs[i]);
// btnNext.onclick = function () {
//   i = (i + 1) % imgs.length;
//   img1.setAttribute("src", imgs[i]);
//   console.log(img1.getAttribute("src"))
//   console.log(i)
// };

// Bouton Prevent
// btnPrevent.onclick = function () {
//   i = (i - 1 + imgs.length) % imgs.length;
//   img1.setAttribute("src", imgs[i]);
//   console.log(img1.getAttribute("src"));
//   console.log(i);
// };

// SECTION 9 : Exercice 12 B : Caroussel  navigation image avec setInterval
let i = 0;
function start() {
  i = (i + 1) % imgs.length;
  img2.setAttribute("src", imgs[i]);
  img1.getAttribute("src")
//   console.log(i)
};
let setIntervalID = 0
btnStart.onclick = () => {
    setIntervalID = setInterval(start, 2000)
}
btnStop.onclick = () => {
    clearInterval(setIntervalID)
}

// SECTION 10 : Exercice 12 C : Composant Caroussel Réutilisable
let imgComponent = document.querySelector(".imgComponent");
function caroussel ( ...images) {
    let array = images
    let i = 0;
    imgComponent.setAttribute("src", array[i])
    let lien = imgComponent.getAttribute("src");
    function start(){
        array.forEach((element)=> {
            if( lien === element) {
                i += 1,
                imgComponent.setAttribute("src", array[i])
                // console.log(array[i])
                // console.log(i)
                // console.log(array.indexOf(array[i]))
            } else if ( i === array.length -1 ) { 
                imgComponent.setAttribute("src", array[array.length -1])
                i = -1;
            }
        })
    }
    let setIntervalID = setInterval(start, 2000)
}

caroussel (
    "https://medias.reussir.fr/action-agricole-picarde/styles/normal_size/azblob/2023-11/GN2OX9OF1_web.jpg?itok=kZtaCjDn" ,
    "https://www.shutterstock.com/shutterstock/photos/2141866355/display_1500/stock-photo-portrait-of-an-african-worker-in-the-nursery-happy-in-the-greenhouse-looking-at-camera-2141866355.jpg", 
    "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/c/f/8/cf8ee0537a_121131_agriculture-bio-france.jpg",
    "https://www.shutterstock.com/shutterstock/photos/1799476213/display_1500/stock-photo-peruvian-woman-working-on-vegetable-plantation-on-spring-day-carrying-plastic-box-with-freshly-1799476213.jpg",
    "https://media.istockphoto.com/id/1278596068/fr/photo/jeune-jardinier-f%C3%A9minin-heureux-affichant-la-r%C3%A9colte-riche-des-l%C3%A9gumes.jpg?s=2048x2048&w=is&k=20&c=1LDFLQYSF1OXzB4tFWTRX_g9MDGrJNsjHuSeNfmVNvc=",
    "https://media.istockphoto.com/id/949395206/fr/photo/agriculteur-r%C3%A9colte-des-feuilles-de-laitue.jpg?s=2048x2048&w=is&k=20&c=k6hFSFLaFWz6cWhIkcWBCH9xnFP7En0Gpb0EiPtVsIg=",
    "https://www.shutterstock.com/shutterstock/photos/2198300493/display_1500/stock-photo-skilled-african-american-horticulturist-harvesting-young-and-tender-leaves-of-green-chard-in-farm-2198300493.jpg",
    "https://media.istockphoto.com/id/1149217196/fr/photo/agriculteur-contr%C3%B4lant-des-semis-de-tomate-avec-la-tablette-num%C3%A9rique-dans-la-serre-chaude.webp?s=2048x2048&w=is&k=20&c=7Ym-gwsqzULM3_pMGt1g6NtO3m4JD6IVqlZqJ8C0Viw=",
    "https://media.istockphoto.com/id/498799522/fr/photo/homme-souriant-dans-les-vignobles.webp?s=2048x2048&w=is&k=20&c=fsA2N1SoOhOxCCDlO5B-E6LdIZ0y1MKTCxcqnii7dYc=",
    "https://media.istockphoto.com/id/1690922108/fr/photo/agricultrice-travaillant-dans-le-jardinage-un-jardinier-collecte-un-panier-de-l%C3%A9gumes.jpg?s=2048x2048&w=is&k=20&c=oj3Nk3peqka4yQYNb9LQS03oyuazhhma2bu8qcOXIZ8=",
    "https://www.shutterstock.com/shutterstock/photos/2208176163/display_1500/stock-photo-african-american-standing-in-garden-he-s-holding-crate-of-ripe-peaches-2208176163.jpg",
    
)

// Deuxième solution optimisée d'un composant réutilisable
/* <div class="carousel" id="carousel1">
  <img class="carousel-img" src="" alt="Image">
  <div class="carousel-controls">
    <button class="prev">←</button>
    <button class="next">→</button>
    <button class="start">▶️</button>
    <button class="stop">⏹️</button>
  </div>
</div> */

// function Carousel({ containerId, images, interval = 2000 }) {
//   const container = document.getElementById(containerId);
//   const imgTag = container.querySelector('.carousel-img');
//   const btnPrev = container.querySelector('.prev');
//   const btnNext = container.querySelector('.next');
//   const btnStart = container.querySelector('.start');
//   const btnStop = container.querySelector('.stop');

//   let index = 0;
//   let timerId = null;

//   // Initialiser l’image
//   imgTag.setAttribute("src", images[index]);

//   const updateImage = () => {
//     imgTag.setAttribute("src", images[index]);
//   };

//   const nextImage = () => {
//     index = (index + 1) % images.length;
//     updateImage();
//   };

//   const prevImage = () => {
//     index = (index - 1 + images.length) % images.length;
//     updateImage();
//   };

//   const start = () => {
//     if (!timerId) {
//       timerId = setInterval(nextImage, interval);
//     }
//   };

//   const stop = () => {
//     clearInterval(timerId);
//     timerId = null;
//   };

//   // Attacher les événements
//   btnNext.addEventListener("click", nextImage);
//   btnPrev.addEventListener("click", prevImage);
//   btnStart.addEventListener("click", start);
//   btnStop.addEventListener("click", stop);

//   // Retourner un objet pour éventuellement manipuler de l'extérieur
//   return {
//     next: nextImage,
//     prev: prevImage,
//     start,
//     stop,
//   };
// }

// const imgs1 = [
//   "img/photo1.jpg",
//   "img/photo2.jpg",
//   "img/photo3.jpg",
//   "img/photo4.jpg"
// ];

// const imgs2 = [
//   "img2/1.jpg",
//   "img2/2.jpg",
//   "img2/3.jpg"
// ];

// // Tu lances ton carrousel
// const myCarousel1 = Carousel({
//   containerId: "carousel1",
//   images: imgs1,
//   interval: 3000,
// });

// const myCarousel2 = Carousel({
//   containerId: "carousel2",
//   images: imgs2,
//   interval: 1000,
// });

//////////// SECTION 11 : Exercice : Horloge petit tp HTML CSS JS ////////////

let second = document.querySelector(".second");
let minute = document.querySelector(".minute")
let hours = document.querySelector(".hours")

// // Ma première solution sans le modulo

// function secondGo() {
//     let secondCal = 0;
//     let minuteur = 0;
//     let hoursCal = 0;

//     setInterval(
//         () => {

//             secondCal += 1;
            
//                 if (secondCal > 3) {
//                     secondCal = 0;
//                     minuteur += 1;
//                 }
//                 if (minuteur > 2) {
//                     minuteur = 0;
//                     hoursCal += 1;
//                 }
//                 if (hoursCal > 2) {
//                     hoursCal = 0;
//                 }

//             second.textContent = secondCal;
//             minute.textContent = minuteur;
//             hours.textContent = hoursCal;
//         }
//         ,1000
//     ); 
// }
// secondGo();

// Deuxième solution avec le modulo
let k = 0;
let o = 0;
let p = 0;

let intervalId = setInterval(
    ()=> {
        k = (k+1) % 4;
        second.textContent = k
        if (k === 0) {
            o = (o+1) % 3;
            minute.textContent = o;
        }
        if( o === 0 & k === 0) {
            hours.textContent = p;
            p = (p+1) % 3;
            hours.textContent = p;
        }
    },
1000
)

