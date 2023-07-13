/* // rapelle des types de donnees
let string = "hello";
let number = 5;
let boolean = true;
let maVariable; // undifined */

//Tableau
let array = ["bordeaux", "lyon", "paris"];
//console.log(array[0]);[] pour ce balader dans un array
let array2 = ["bordeaux", 24, true, [1, 2], { nom: "denis" }]; // chaque partie de lobject a un index
// console.log(array2[4].nom); // pour ce balader dans un object
let objet = {
  pseudo: "denis",
  age: 24,
  techno: ["html", "css", "javascript"],
  admin: false,
};
// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    name: "Denis",
    age: 24,
    techno: ["html", "css", "javascript"],
    admin: false,
  },
  {
    name: "Samia",
    age: 35,
    techno: ["react", "nodejs", "javascript"],
    admin: false,
  },
  {
    name: "Nikola",
    age: 18,
    techno: ["css", "sass", "bootstrap"],
    admin: true,
  },
];

// console.log(data[2].name);

//--------------------------
//les structure de controle
//--------------------------
if (data[0].age > data[1].age) {
  console.log(data[0].name + " est plus age que " + data[1].name);
} else {
  //valeur si faux
}

// while
let w = 0;

while (w < 10) {
  w++;
  // console.log(w);
}

//do while
let d = 0;
do {
  d++;
  // console.log(d);
} while (d < 5);

// les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.name} - ${user.age} ans</li>`;
}
// on declare la valeur de i | jusqu'ou on boucle | on incrémente i si la condition nest pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(i);
  // console.log(data[i].techno);
  // document.body.innerHTML += `<h2>${data[i].techno}</h2>`;
}

//switch
document.body.addEventListener("click", (e) => {
  //fonction au click
  switch (e.target.id) {
    case "python":
      document.body.style.background = "blue";
      break;
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "html":
      document.body.style.background = "orange";
      break;
    default:
      null;
      break;
  }
});

//----------------
//methodes string
//----------------

let string2 = "javascript est un langage orienté objet";

// console.log(eval(parseInt("1") + 1));
// console.log(typeof "42");
// console.log(isNaN("48"));

// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage")); // retroune -1 si il ne connais pas

// let newString = string2.slice(2); // slice coupe les deux premier element
// let newString = string2.slice(5, 17);
// console.log(newString);

//  console.log(string2.split(" ")); permet de couper les mots

// console.log(string2.toLowerCase()); //tous remettre en minuscule
// console.log(string2.toUpperCase()); // tous remettre en majuscule

// console.log(string2.replace("javascript", "java"));

//----------------
// methode number
//----------------

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(2)); // on remet le nombre à 2 chiffre apres la virgule
// console.log(parseInt("43")); //transforme la chaine en entier
// console.log(parseInt(numberString)); //transforme la chaine en entier
// console.log(parseFloat(numberString)); //recuperer les chiffre dqns une chaine

//math
// console.log(Math.PI);
// console.log(Math.round(4.5)); // arrondie le nombre
// console.log(Math.floor(4.9)); // arrondie le nombre au plus bas
// console.log(Math.ceil(4.9)); // arrondie le nombre au plus haut
// console.log(Math.pow(2, 7)); // puissance
// console.log(Math.sqrt(64)); // racine caree
// console.log(Math.random() * 50);

//--------------
//methode array
//--------------

let array3 = ["javascript", "css", "html"];
let array4 = ["ruby", "php", "python"];

// let newArray = array3.concat(array4); //fusionne deux tableaux
// console.log(newArray);

//let newArray = [...array3, ...array4]; // spraid operateur ... case le tableau afin de le fusioner
// console.log(newArray);

// console.log(array3.join(", ")); // permet de mettre en forme un tableau

// console.log(array3.slice(1));// decoupe le premier element du tableau
// console.log(newArray.slice(3, 4));

// array3.forEach((langage) => {
//   console.log(langage); // parcours un tableau
// });

// console.log(array3.every((langage) => langage === "html")); // vérifie si tous les elements du tableau sont html
// console.log(array3.some((langage) => langage === "html")); // vérifie si au moins un element du tableau est html

// let shift = array3.shift(); // supprime le premier element du tableau
// console.log(array3);

// console.log(array3.pop()); // supprime le dernier element du tableau

// const restArray = array3.splice(1, 1, "c++"); //remplace
// console.log(restArray);
// console.log(array3);

// IMPORTANT//

let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y)); // prend 2 parametre  additione tous les elements du tableau);
arrayNumber.push(17); // ajoute un element au tableau a la fin
// console.log(arrayNumber);

//------------------
// FILTER ,SORT ,MAP
//------------------

// FILTER = filtrer
// console.log(arrayNumber.filter((number) => number > 10));

// // SORT = trier
// console.log(arrayNumber.sort((a, b) => a - b)); // par ordre croissant b-a par ordre decroissant

// // MAP = transformer
// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number}</li>`)
//   .join(" ");

//------------------
//methode objet
//------------------
// document.body.innerHTML = data

//   .filter((user) => user.name.includes("a"))
//   .sort((a, b) => a.age - b.age)
//   .map(
//     (user) =>
//       `
// <div class="user-card">
//   <h2>${user.name}</h2>
//   <p>age : ${user.age} ans</p>
//   <p>${user.techno}</p>
//   <p>Statuts : ${user.admin ? "Moderateur" : "menbre"}</p>
// </div>
// `
//   )
//   .join("");

//-------------
//les dates
//-------------

//date classique
let date = new Date();

//timestamp
let timestamp = Date.parse(date);
// console.log(timestamp);

// isostring
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}
// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

//---------------
// destructuring
//--------------

let moreData = {
  destVar: ["element 1", "element 2", "element 3"],
};

const { destVar } = moreData;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x);
// console.log(y);
// console.log(z);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
// console.log(dateDestructuring(iso));

//------------
//les datassets
//------------

const h3js = document.getElementById("javascript");
h3js.style.color = "red";
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");

// h3.forEach((language) => {
//   console.log(language.dataset.lang);
// });

//----------------
//les regex
//----------------

let mail = "john.dupont@gmail.com";
// console.log(mail.search(/@/));
// console.log(mail.replace(/example/, "de"));
// console.log(mail.match(/@/i));
// console.log(mail.match(/[zug]/));
// console.log(mail.match(/[50]/));

//tous les chiffres
// console.log(mail.match(/[\d]/));

//matcher toutes les lettre
// console.log(mail.match(/[a-z]/));

// console.log(mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i));

let separor = 823675837789376536n;

// console.log(separor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
