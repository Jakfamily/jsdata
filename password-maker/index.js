const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!@#$%^&*()_+";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";

  // Vérifier les options sélectionnées
  if (lowercase.checked) {
    data.push(...dataLowercase);
  }
  if (uppercase.checked) {
    data.push(...dataUppercase);
  }
  if (numbers.checked) {
    data.push(...dataNumbers);
  }
  if (symbols.checked) {
    data.push(...dataSymbols);
  }

  // Vérifier si au moins une option est sélectionnée
  if (data.length === 0) {
    alert("Vous n'avez pas sélectionné d'option");
    return;
  }

  // Générer le mot de passe
  for (let i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  // Afficher le mot de passe généré
  passwordOutput.value = password;

  // Copier le mot de passe dans le presse-papiers
  navigator.clipboard
    .writeText(password)
    .then(function () {
      console.log("Mot de passe copié avec succès !");
    })
    .catch(function (error) {
      console.error("Erreur lors de la copie du mot de passe :", error);
    });

  //modifier le text  du boutton
  generateButton.textContent = "Copier";
  setTimeout(() => {
    generateButton.textContent = "generer mot de passe";
  }, 2000);
};

// Écouter le clic sur le bouton de génération de mot de passe
generateButton.addEventListener("click", generatePassword);
