const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "!@#$%^&*()_+";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";

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

  if (data.length === 0) {
    alert("Vous n'avez pas sélectionné d'option");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;

  navigator.clipboard
    .writeText(password)
    .then(function () {
      console.log("Mot de passe copié avec succès !");
    })
    .catch(function (error) {
      console.error("Erreur lors de la copie du mot de passe :", error);
    });
};

generateButton.addEventListener("click", generatePassword);
