//  const fromage = "Comté";

// if (fromage) {
// console.log("Ouaips&nbsp;! Du fromage pour mettre sur un toast.");
// } else {
// console.log("Pas de fromage sur le toast pour vous aujourd'hui.");
// }

///////////////////////////////////////////////////////////////////
// let coursesFaites = false;

//     if (coursesFaites) {
//     // pas besoin d'écrire explicitement '=== true'
//     let argentDePoche = 10;
//     } else {
//     let argentDePoche = 5;
//     };
///////////////////////////////////////////////////////////////////

// Théorie Doc sur les Instruction condtionnelles avec if...else if, else

// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   const choice = select.value;

// if (choice === "sunny") {
//     para.textContent =
//       "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//   } else if (choice === "rainy") {
//     para.textContent =
//       "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.";
//   } else if (choice === "snowing") {
//     para.textContent =
//       "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//   } else if (choice === "overcast") {
//     para.textContent =
//       "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//   } else {
//     para.textContent = "";
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////////////
                    // APPRENTISSAGE DES STRUCTURES CONDITIONNELLES AVEC "IF ... ELSE IF ... ELSE ...." , "SWITCH - CASE" et LES CONDITIONS TERNAIRES

// switch (expression) {
//   case choix1:
//     //exécuter ce code
//     break;

//   case choix2:
//     //exécuter ce code à la place
//     break;

//   // incorporez autant de case que vous le souhaitez

//   default:
//     // sinon, exécutez juste ce code
// }

// let iiii = 13;

// if ( iiii < 10 ) {
//     alert("je suis mineur");
// } else if (iiii > 12 ){
//     alert("je suis majeur")
//     alert(iiii += 4)
// };
// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);

// function setWeather() {
//   let choice = select.value;

//   switch (choice) {
//     case "sunny":
//       para.textContent =
//         "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
//       break;
//     case "rainy":
//       para.textContent =
//         "Rain is falling outside; take a rain coat and a brolly, and don't stay out for too long.";
//       break;
//     case "snowing":
//       para.textContent =
//         "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//       break;
//     case "overcast":
//       para.textContent =
//         "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//       break;
//     default:
//       para.textContent = "";
//   }
// }


// let iii = Number(prompt("")); //J'utilise Number() pour convertir la réponse en nombre parce que prompt est toujours une chaine de caractère

// switch (true) {
//     case iii < 10 : alert("Trop petit")
//     break;
//     case iii > 10: alert("Trop grand")
//     break;
//     case iii === 10 : alert("Juste réponse") // Si j'enlève Number() dans iii le strict égale ne marcherait pas dans ce cas pcq 10 !== "10"
//     break;
//     default : alert("Je ne comprends pas ta réponse") 
// }

// let role = prompt("Quel est ton rôle ? (admin, user, moderator)").toLowerCase();
// let level = Number(prompt("Quel est ton niveau d'accès ? (1 à 5)"));

                     // Traitement selon le rôle (SWITCH principal)
// switch (role) {
//     case "admin":
//         alert("Bienvenue Admin !");
//         if (level >= 4) {
//             alert("Accès total à la configuration système.");
//         } else {
//             alert("Accès limité à certaines fonctionnalités.");
//         }
//         break;

//     case "moderator":
//         alert("Bonjour Modérateur !");
//         if (level >= 3) {
//             alert("Tu peux gérer les commentaires et bannir des utilisateurs.");
//         } else {
//             alert("Tu peux uniquement modérer les commentaires.");
//         }
//         break;

//     case "user":
//         alert("Salut utilisateur !");
//         if (level >= 2) {
//             alert("Tu peux modifier ton profil et poster des messages.");
//         } else {
//             alert("Tu peux uniquement consulter les contenus.");
//         }
//         break;

//     default:
//         alert("Rôle non reconnu. Accès refusé.");
// }

///////////////////////////////////////////////////////////////////////////////////////////////
                    // APPRENTISSAGE DES STRUCTURES DE BOUCLES

                    // Boucle For Standard
// const chats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin",];
// let info = "Mes chats s'appellent ";
// const para = document.querySelector("h4");

// for (let i = 0; i < chats.length; i++) {
//   if (i=== chats.length -1) {
//     info += chats[i] + ". ";
//   } else {
//     info += chats[i] + ", ";
//   }
// }
// para.textContent = info;

// Apprentissage de Break pour quitter une boucle
// const contacts = [
//   "Chris:2232322",
//   "Sarah:3453456",
//   "Bill:7654322",
//   "Mary:9998769",
//   "Dianne:9384975",
// ];
// const para = document.querySelector("p");
// const input = document.querySelector("input");
// const bouton = document.querySelector("button");

// bouton.addEventListener("click", function () {
//   let searchName = input.value;
//   input.value = "";
//   input.focus();
//   for (let i = 0; i < contacts.length; i++) {
//     let splitContact = contacts[i].split(":");
//     if (splitContact[0] === searchName) {
//       para.textContent =
//         "Le numéro de " + splitContact[0] + " est le : "  + splitContact[1] + ".";
//       break;
//     } else {
//       para.textContent = "Contact not found.";
//     }
//   }
// });

                    // CONTINUE pour passer des itérations 
// let num = input.value;

// for (let i = 1; i <= num; i++) {
//   let sqRoot = Math.sqrt(i);
//   if (Math.floor(sqRoot) !== sqRoot) {
//     continue;
//   }
//   para.textContent += i + " ";
// }
// function getRandom() {
//   return Math.random();
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 3) {
//     continue; // saute 3
//   }
//   if (i === 7) {
//     break; // arrête au 7
//   }
//   console.log(i);
// }

///////////////////// APPRENTISSAGE DES FONCTIONS
                    // Comprendre la portée des variables globale et locale
// const x = 1;

//     function a() {
//       const y = 2;
//     }

//     function b() {
//       const z = 3;
//     }

//     function output(value) {
//       const para = document.createElement('p');
//       document.body.appendChild(para);
//       para.textContent = `Value: ${value}`;
//     }
// output(x);
// output(y);

// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.split(""));

// var myString = "Hello World. How are you doing?";
// var splits = myString.split("", 3);

// console.log(splits);

// let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

// let myArray = myData.split(",");
// console.log(myArray);

// CORRECTION Exercice Doc MDN partie tableau :Affichage des produits et leurs prix dans la partie des tableaux sur la doc MD?"

// let products = [
//                 'Caleçons:6.99',
//                 'Chaussettes:5.99',
//                 'T-shirt:14.99',
//                 'Pantalons:31.99',
//                 'Chaussures:23.99',
//             ];

// total=0;

// for ( let i = 0; i < products.length; i++) { 
//     // console.log(products[i]);
//     let product = products[i].split(":");
//     let price = parseFloat(product[1]);
//     let name = product[0];
//     // console.log(`${name} coute : ${price} $`)
//     total += price

// }
// console.log(total);

// TOUS LES MOYENS POUR PARCOURIR UN TABLEAU EN JS

// let fruits = ["Pomme", "Banane", "Mangue", "Orange"];

// // Méthode classique avec la boucle FOR

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // Méthode classique avec la boucle FOR avec un flag
// let fruit = "Flag   ";
// for(i=0 ; i < fruits.length ; i++) {
//     fruit += `|    ${i} ==> ${fruits[i]}`;
// }
// console.log(fruit);

// //// /Avec FOR OF en affichant les valeurs seulement
// for (let fruit of fruits) {
//     console.log(fruit); 
// }

// /////// Avec FOR OF mais en stockant les données dans un tableau
// let a = -1;
// let hey = [];
// for (let fruit of fruits) {
//     a++
//     hey.push(fruits[a]);  
// }
// console.log(hey);

// //////// Avec FOREACH, prend en paramètre l'élément, l'index et le tableau

// // ForEach avec une fonction Function 
// fruits.forEach(function (fruit, index, fruits) { 
//     // console.log(fruits);
//     console.log(index, fruit)
// })

// // ForEach avec une fonction flechée
// fruits.forEach((fruit, index, fruits) => { 
//     console.log(fruits);
//     console.log(index)
// })

// //////// Avec MAP()
// console.log(fruits.map((fruit, index, fruits) => `${index} => ${fruit} `));

// ////// Avec FOR IN à éviter pour les tableau

// for (let index in fruits) {
//     console.log(`${index} : ${fruits[index]}`);
// }

// //////////////// Toutes les méthodes pour parcourir des tableaux multidimensionnels"
// let tableau = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// // forEach pour les tableaux multidimensionels
// tableau.forEach((element, index, tableau) => {
//     console.log(tableau)
// })

// tableau.forEach((element, index) => {
//     element.forEach((element2, index, element) => {
//         // console.log(element2)
//     })
// })

// // La boucle for pour les tableaux multidimensionels
// for (let i = 0; i < tableau.length; i++) {
//   for (let j = 0; j < tableau[i].length; j++) {
//     console.log(tableau[i][j]);
//   }
// }

// // La boucle for of pour les tableaux multidimensionels
// for (let ligne of tableau) {
//   for (let valeur of ligne) {
//     console.log(valeur);
//   }
// }

// // map() pour les tableaux multidimensionels
// let doublés = tableau.map(ligne => ligne.map(val => val * 2));
// console.log(doublés);

// //////////////// Toutes les méthodes pour itérer et afficher les objets en JS"
// let personne = {
//   nom: "Nadège",
//   âge: 43,
//   métier: "hypnothérapeute"
// };

// ///// For in pour les Objets
// for (let clé in personne) {
// //   console.log(`${clé} : ${personne[clé]}`);
// }

// ///// Object.keys() + forEach → Quand tu veux les clés
// Object.keys(personne).forEach(clef => {
// //   console.log(`${clef} : ${personne[clef]}`);
// });

// ///// Object.values() → Quand tu veux juste les valeurs
// Object.values(personne).forEach(valeur => {
// //   console.log(valeur);
// });

// ///// Object.entries() → Quand tu veux les paires clé/valeur
// Object.entries(personne).forEach(([clé, valeur]) => {
//   console.log(`${clé} : ${valeur}`);
// });

//////////// MANIPULATION DES DOCUMENTS HTML EN JS

let link = document.querySelector("a"); // Récupérer et conserver la référence d'un élément <a> dans une varibale pour pouvoir le manipuler
link.textContent = "Mozilla Developer Network"; // Modification du text d'un élément déjà récupéré
link.href = "https://developer.mozilla.org"; // Modification du contenu d'un attribut d'un élément récupéré
const sect = document.querySelector("section"); // Récupération de la référence de l'élément section
let para = document.createElement('p'); // Création d'un nouveau d'un noeud pas encore affecté dans le DOM et dans le fichier HTML
para.textContent = "Nous espérons que vous avez apprécié la balade."; // Création de son contenu
sect.appendChild(para); // Affectation dans le DOM de l'élément p créé au dessu
let text = document.createTextNode(" - la première source de connaissances en matière de développement Web.") // Création de noeud de text pas encore affecté au DOM
let paraLink = document.querySelector('p'); 
paraLink.appendChild(text); // Ajout d'un text conservé dans une variable noeud non affecté pour l'ajouter à un texte déjà existant dans un élément p du DOM

// Déplacer et supprimer les élements
sect.appendChild(paraLink); // Pour déplacer l'élément paraLink en bas de la section
let para2 = para.cloneNode(true); // Pour cloner l'élément para, il reste jusque là un noeud et pas un élement. Il devient un élément (noeuf affecté), à partir du moment où on l'attache au DOM avec appendChild 
sect.appendChild(para2); // affecter dans le DOM le noeud créé en dessus et qui devient un élement
sect.removeChild(para); // Premier moyen de suppression par son parent
// para.remove() // Deuxième moyen de suppression par l'élément seulement.
// para.parentNode.removeChild(para); // / Variante : suppression via parentNode.removeChild()

/////Manipuler le style d'un document HTML en JS
console.log(document.styleSheets);

// Première méthode du style en ligne 
// para2.style.backgroundColor = "#c8f193";
// para2.style.color = "#db9696";
// para2.style.fontWeight = "900"
// para2.style.padding = "10px";
// para2.style.width = "250px";
// para2.style.textAlign = "center";
// console.log(para2.attributes[0]);

// Deuxième méthode
para2.setAttribute("class", "highlight");
console.log(para2);

// APPRENTISSAGE des rest Parameters (...param) pour récupérer un nombre illimité d'arguments
// Syntaxe
function maFonction(...parametres) {
    console.log(parametres); // c’est un tableau
}
maFonction(); // Array []

// Exemple des integer
function somme(...nombres) {
    console.log(nombres.reduce((total, n) => total + n, 0)) ;
}
somme(2, 3); // 5
somme(1, 2, 3, 4); // 10

function saluerToutLeMonde(...prenoms) {
    prenoms.forEach(p => console.log("Salut", p));
}
saluerToutLeMonde("Nadège", "Michel", "Claude");
// Salut Nadège
// Salut Michel
// Salut Claude

// Rest parameter doit etre le dernier paramètre
function exemple(inutile, ...leReste) { } // Vrai
function exemple(leResteParameter, autre) { } // Erreur

// A ne pas confondre avec spread syntaxe
const arr = [1, 2, 3, "Koribirama", 5, ];
console.log(...arr); // 1 2 3

// Utilisable aussi pour les classes
class Groupe {
    constructor(nom, ...membres) {
        this.nom = nom;
        this.membres = membres; // tableau
    }
}

/////////////////////////////////////////////
// APPRENTISSAGE DU SETTIMEOUT
// setTimeout(() => {
// //   console.log("Retardée de 20 seconde.");
// }, "20000")

// setTimeout(() => {
// //   console.log("Voici le premier message");
// }, 5000);
// setTimeout(() => {
//   console.log("Voici le second message");
// }, 3000);
// let setTimeoutID = setTimeout(() => {
//   console.log("Voici le troisième message");
// }, 1000);

// function toto() {
// //   console.log("toto a été appelée");
// }
// setTimeout(toto, 0);
// console.log("Après setTimeout()");

// setTimeout(toto, 20000);
// console.log("Après setTimeout()");

// console.log(setTimeoutID)

// function direBonjour(nom) {
//   console.log("Bonjour " + nom + " !");
// }

// SETTIMEOUT
// setTimeout(function, délai_en_millisecondes, param1, param2, ...)

// console.log("Avant");

// setTimeout(function () {
//   console.log("3 secondes plus tard...");
// }, 3000); // 3000 ms = 3 secondes
// console.log("Après");

// function saluer(nom) {
//   console.log("Salut " + nom + " !");
// }
// setTimeout(saluer, 2000, "Frérot");

// let timeoutID = setTimeout(() => {
//   console.log("Ce message ne s'affichera pas !");
// }, 5000);
// clearTimeout(timeoutID);

// Cas d'usage, masquer des popup par exemple
// setTimeout(() => {
//   document.querySelector(".popup").style.display = "none";
// }, 4000); // Masque une popup après 4 secondes

// Créer un délai entre deux actions :
// console.log("Chargement...");
// setTimeout(() => {
//   console.log("Données affichées !");
// }, 2000);

///////////////////////////
// APPRENTISSAGE DU SETINTERVAL et du ClearInterval

// setInterval(direBonjour, 3000, "Patience");

// let monIntervalle = setInterval(() => {
//   console.log("Ceci s'affiche toutes les 4 secondes");
// }, 4000);

// // Stop après 15 secondes
// setTimeout(() => {
//   clearInterval(monIntervalle);
//   console.log("Intervalle arrêté !");
// }, 15000);

// // Horloge
// setInterval(() => {
//   let maintenant = new Date();
// //   console.log(maintenant.toLocaleTimeString());
// }, 1000);

// // Caroussel
// let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
// let index = 0;

// setInterval(() => {
//   document.querySelector("img").src = images[index];
//   index = (index + 1) % images.length;
// }, 3000); // Change l’image toutes les 3 secondes

// CLEARTIMEOUT() et CLEARINTERVAL()

//timeoutID et clearTimeout
// let timeoutID = setTimeout(() => {
//   console.log("Hello après 5 secondes !");
// }, 5000);

// setTimeout(() => {
//   clearTimeout(timeoutID);
//   console.log("Timeout annulé !");
// }, 3000); // Annule l'exécution au bout de 3 secondes

// intervalID et clearInterval
// let count = 0;
// let intervalID = setInterval(() => {
//   console.log("Interval : ", ++count);
//   if (count === 3) {
//     clearInterval(intervalID);
//     console.log("Interval terminé !");
//   }
// }, 1000);

///////////////////
////////// APPPRENTISSAGE DES FONCTIONS EN JS

function faireDuThe() {
  console.log("Faire bouillir de l'eau...");
  console.log("Mettre le sachet de thé...");
  console.log("Servir !");
}
faireDuThe(); // Appelle la fonction
faireDuThe(); // Encore une tasse

// Déclarer une fonction classique
function nomDeLaFonction() {
  // instructions
}

function nomDeLaFonction(param1, param2) {
  // Instructions à exécuter
  return resultat; // (optionnel)
}
// Exemple simple de fonction qui affiche Bonjour
function direBonjour() {
  console.log("Bonjour frérot !");
}
direBonjour(); // Affiche : Bonjour frérot !

// Fonction avec paramètre mais sans return
function saluer(prenom) {
  console.log("Salut " + prenom + " !");
}
saluer("Amine"); // Affiche : Salut Amine !
saluer("Nadège"); // Affiche : Salut Nadège !

// Une fonction qui retourne une valeur avec return
function addition(a, b) {
  return a + b;
}
let resultat = addition(5, 3); 
console.log(resultat); // Affiche : 8

// Fonction fléchée général
const saluerrr = () => {
  console.log("Hello frérot !");
}
saluerrr();

// Une fonction fléchée doit toujours être affectée à une variable ou passée comme argument à une autre fonction (callback).

() => {
  console.log("Hello"); // ERREUR
};

// Fonction fléchée si un seule paramètre
const saluerPrenom = prenom => {
  console.log("Hello " + prenom);
}
saluerPrenom("Dally")

// Paramètre par défaut
function direBonjour(nom = "invité") {
  console.log("Bonjour " + nom);
}
direBonjour();        // Bonjour invité
direBonjour("Alex");  // Bonjour Alex

////////// Fonctions anonymes 

// Exemple 1 : Fonction anonyme stockée dans une variable
const direBonsoir = function() {
  console.log("Bonsoir frérot !");
};
direBonsoir(); // Affiche "Bonjour frérot !"

//Exemple 2 – fonction anonyme comme callback :
setTimeout(function() {
  console.log("Coucou après 2 secondes !");
}, 2000);

//Exemple 3: fonction anonyme retournée par une autre fonction
function multiplier(x) {
  return function(y) {
    return x * y;
  };
}
const foisDeux = multiplier(2);
console.log(foisDeux(4)); // Affiche 8

////////////// Fonction Callback //////////////

// exemple simple de callback
function saluer(nom) {
  console.log("Salut " + nom);
}
function traiterUtilisateur(callback) {
  const nom = "Frérot";
  callback(nom); // ← Ici, le callback est exécuté
}
traiterUtilisateur(saluer); // ← Ici, tu passes la fonction comme argument

// Mauvais : ça appelle la fonction directement !
// traiterUtilisateur(saluer()); //Faux 
// Bon : on passe la référence à la fonction
// traiterUtilisateur(saluer); //Vrai

// Callback avec des fonctions anonymes
setTimeout(function() {
  console.log("J'arrive après 2 secondes");
}, 2000);

// Callback avec fontion fléchée
setTimeout(() => {
  console.log("Coucou frérot (version fléchée)");
}, 1000);

//Callback avec des fonctions de tableau comme map()
const nombres = [1, 2, 3];
const doubles = nombres.map(function(x) {
  return x * 2;
});
console.log(doubles); // [2, 4, 6]

//Attention aux erreurs fréquentes
// faireQuelqueChose(callback()); // ❌ Mauvais
// faireQuelqueChose(callback);   // ✅ Correct

// Attention aux imbrications de plusieurs callback, utilisez des promesses
// faireA(() => {
//   faireB(() => {
//     faireC(() => {
//       console.log("Trop d’imbrications");
//     });
//   });
// });

// Apprentissage des classes

// Définir une classe
class Personne {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }

  saluer() {
    console.log(`Salut, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  }
}

//Créer des objets à partir de la classe créée
const p1 = new Personne("Nadège", 41);
const p2 = new Personne("Frérot", 30);

p1.saluer(); // Salut, je m'appelle Nadège et j'ai 41 ans.
p2.saluer(); // Salut, je m'appelle Frérot et j'ai 30 ans.

