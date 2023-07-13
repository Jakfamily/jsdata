// Obtient l'élément cible à partir de son identifiant "target"
const target = document.getElementById("target");

// Tableau contenant les mots à afficher
let array = ["developpeur", "photographe", "webdesigner"];

// Indices pour suivre le mot et la lettre en cours
let wordIndex = 0;
let letterIndex = 0;

// Fonction pour créer et afficher une lettre
const createLetters = () => {
  // Crée un nouvel élément <span> pour représenter la lettre
  const letter = document.createElement("span");
  // Ajoute la lettre à l'élément cible
  target.appendChild(letter);

  // Définit le contenu textuel de la lettre en utilisant le mot et l'indice actuels
  letter.textContent = array[wordIndex][letterIndex];

  // Supprime la lettre après un délai de 2800 millisecondes (2,8 secondes)
  setTimeout(() => {
    letter.remove();
  }, 2800);
};

// Fonction récursive pour animer les lettres
const loop = () => {
  setTimeout(() => {
    // Vérifie si tous les mots ont été affichés
    if (wordIndex >= array.length) {
      // Réinitialise les indices pour recommencer à partir du premier mot et de la première lettre
      wordIndex = 0;
      letterIndex = 0;
      // Appelle récursivement la fonction loop() pour continuer l'animation
      loop();
    }
    // Vérifie s'il reste des lettres à afficher dans le mot actuel
    else if (letterIndex < array[wordIndex].length) {
      // Crée et affiche la lettre suivante
      createLetters();
      // Incrémente l'indice de lettre
      letterIndex++;
      // Appelle récursivement la fonction loop() pour continuer l'animation
      loop();
    }
    // Toutes les lettres du mot actuel ont été affichées
    else {
      // Passe au mot suivant en réinitialisant l'indice de lettre
      wordIndex++;
      letterIndex = 0;
      // Appelle récursivement la fonction loop() après un délai de 2800 millisecondes (2,8 secondes)
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};

// Démarre l'animation en appelant la fonction loop()
loop();
