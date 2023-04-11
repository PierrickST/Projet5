// ******** Récupération des données saisies par l'utilisateur *******

let fillForm = document.getElementById("order");
fillForm.addEventListener("click", function (event) {
  event.preventDefault();
  let getInput = document.getElementById("firstName");
  if (!getInput.value.trim()) {
    let firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
    firstNameErrorMsg.textContent = "Ecrivez votre prénom";
    return;
  }
  let getLastName = document.getElementById("lastName");
  if (!getLastName.value.trim()) {
    let lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
    lastNameErrorMsg.textContent = "Ecrivez votre nom";
    return;
  }
  let getAdress = document.getElementById("address");
  if (!getAdress.value.trim()) {
    let adressErrorMsg = document.getElementById("addressErrorMsg");
    adressErrorMsg.textContent = "Ecrivez votre adresse";
    return;
  }
  let getCity = document.getElementById("city");
  if (!getCity.value.trim()) {
    let cityErrorMsg = document.getElementById("cityErrorMsg");
    cityErrorMsg.textContent = "Ecrivez votre ville";
    return;
  }
  let getEmail = document.getElementById("email");
  if (!getEmail.value.trim()) {
    let mailErrorMsg = document.getElementById("emailErrorMsg");
    mailErrorMsg.textContent = "Ecrivez votre email";
    return;
  }
});
