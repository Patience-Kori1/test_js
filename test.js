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

// let annuaire = {
//     Patricia: '06 66 66 66 66',
//     David: '07 77 77 77 77',
//     Simon: '07 32 51 21 2',
//     Salomé: '08 22 26 65',
//     Victoria: '02 35 46 7',
// };

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

// Correction de l'exercice 9 sur le DOM. Partie B : la récupération des valeurs du formulaire

// let inputNom = document.querySelector('.nom');
// let inputPrenom = document.querySelector('.prenom');
// inputNom.value = "Fort";
// inputPrenom.value = "Sim";

// alert(inputNom.value);
// alert(inputPrenom.value);

// Correction de l'exercice 9 sur le DOM. Partie C : Calculatrice (Onclik + récup value form)

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

// CORRECTION DE L4EXERCICE 10 A : Cacher - Afficher (Ajouter et retrait des class d'un élet HTML)

// let para2 = document.querySelector ('#second');
// console.log(para2);
// para2.classList.remove('hidden');
// console.log(para2);
         
// CORRECTION DE L4EXERCICE 10B: Cacher les spoiler (Ajouter et retrait des class d'un élet HTML à l'aide des boutons onclick)

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
//Correction Exercice 10 C DOM : Filtrage par catégorie
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
let btn = document.querySelector(".hey");
btn.onclick = function(){
    swal("Bonjour seweet alert heheehe ");
}
       