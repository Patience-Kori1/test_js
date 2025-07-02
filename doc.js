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
