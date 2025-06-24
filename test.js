 // Exercice 1. Les types de variable en JS

        let a= 0; // number
        let b= true; // Boolean
        let c = 2 - 1.2; //number
        let d ='hello'; // String
        let e = 'bonjour' + 4; // String
        let f = { a: 0.4 }; // Object 
        let g = [ 'a', 'b', 'c' ]; // Array, Object

        console.log(typeof(g));

        // Exercice 2. Sur la déclaration des variables

        var monNombre = 4;
        var maChaine = 'bonjour ! :-)';
        var monBooleen = false;
        var sansValeur;

        var monNombre = 4;
        var maChaine = 'bonjour ! :-)';
        var monBooleen = false;
        var sansValeur;

        // Vérification des variables
        console.log(monNombre === 4); // Devrait afficher true si monNombre vaut 4
        console.log(maChaine === 'bonjour ! :-)'); // Devrait afficher true si maChaine contient 'bonjour ! :-)'
        console.log(monBooleen === false); // Devrait afficher true si monBooleen vaut false
        console.log(sansValeur === undefined); //

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

function diviserParDeux(n) {
     n = n/2;
    return n
};

let i = diviserParDeux(6);
console.log(i)

// •	Une fonction somme qui retourne la somme des deux paramètres qui lui seront passés. Tests : 
// o	somme(1, 1) === 2;
// o	somme(1, 2) === 3;
// o	somme(2, 1) === 3;
// o	var n = Math.random(); somme(n, 1) === n + 1;

function somme(a,b) {
    n= a+b;
    return n
}

let ii= somme(78,5.36547)
console.log(ii)

let hasard = Math.random();
console.log(hasard);

// EXERCICE 7 Concernant les tableaux

// Calendrier 
let jours = [ 'lun', '007', 'mer', 'jeu', 'ven', 'sam', 'BUG' ];
jours.pop();
console.log(jours);
jours.push('dim');
console.log(jours);
jours[1] = 'mar';
console.log(jours);
console.log(jours.length);
console.log(jours[2]);
console.log(jours[jours.length -1]);


//Exercice: Épicerie

var fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];

for (let a=0; a < 5; a++ ){ // J'ai mis cette boucle juste pour voir l'évolution de mon tableau
    alert("Voici la liste des fruits dispo : " + fruits.join(", ") );
    alert("Saisissez dans le formulaire suivant votre fruits préféré")
    let choixClient = prompt();
    console.log(choixClient);
    let fruitTrouve = false;

        for (let i=0; i < fruits.length; i++) {
            if(choixClient.toLowerCase() === fruits[i].toLowerCase() ) {
                console.log(fruits);
                fruitTrouve = true;
                fruits.splice(i,1)
                console.log(fruits);
                alert("ok");
                break;
            }  
        }
        if (!fruitTrouve){
                alert("Indisponible");
            }
        console.log(fruits);
}




        







         


       