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

const chats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin",];
let info = "Mes chats s'appellent ";
const para = document.querySelector("h4");

for (let i = 0; i < chats.length; i++) {
  info += chats[i] + ", ";
  if (i=== chats.length -1) {
    info += chats[i] + ". ";
  }
}
para.textContent = info;
console.log(chats.length -1)


