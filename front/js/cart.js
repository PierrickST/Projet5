const sectionCart = document.querySelector("#cart__items");

let products = localStorage.getItem("products");
products = JSON.parse(products);
let totalQty = 0;
for (const returnQty of products) {
  totalQty = totalQty + parseInt(returnQty.quantite);
}
console.log(totalQty);
const totalQuantity = document.querySelector("#totalQuantity");
totalQuantity.innerText = totalQty;
let totalPrice = 0;
const totalPriceId = document.querySelector("#totalPrice");

for (const returnProducts of products) {
  fetch(`http://localhost:3000/api/products/${returnProducts.id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (basketProducts) {
      console.log(basketProducts);
      totalPrice =
        totalPrice +
        parseInt(basketProducts.price) * parseInt(returnProducts.quantite);
      totalPriceId.innerText = totalPrice;

      let newArticle = document.createElement("article");
      newArticle.setAttribute("class", "cart__item");
      newArticle.setAttribute("data-id", `${basketProducts.id}`);
      newArticle.setAttribute("data-color", `${returnProducts.color}`);
      sectionCart.appendChild(newArticle);

      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "cart__item__img");
      newArticle.appendChild(newDiv);

      let newImg = document.createElement("img");
      newImg.setAttribute("src", basketProducts.imageUrl);
      newImg.setAttribute("alt", basketProducts.altTxt);
      newDiv.appendChild(newImg);

      let newDivContent = document.createElement("div");
      newDivContent.setAttribute("class", "cart__item__content");
      newArticle.appendChild(newDivContent);

      let newDivContentDescription = document.createElement("div");
      newDivContentDescription.setAttribute(
        "class",
        "cart__item__content__description"
      );
      newDivContent.appendChild(newDivContentDescription);

      let newH2 = document.createElement("h2");
      newH2.innerText = basketProducts.name;
      newDivContentDescription.appendChild(newH2);

      let newPColor = document.createElement("p");
      newPColor.innerText = returnProducts.color;
      newDivContentDescription.appendChild(newPColor);

      let newPPrice = document.createElement("p");
      newPPrice.innerText = basketProducts.price + " €";
      newDivContentDescription.appendChild(newPPrice);

      let newDivContentSettings = document.createElement("div");
      newDivContentSettings.setAttribute(
        "class",
        "cart__item__content__settings"
      );
      newDivContent.appendChild(newDivContentSettings);

      let newDivContentSettingsQuantity = document.createElement("div");
      newDivContentSettingsQuantity.setAttribute(
        "class",
        "cart__item__content__settings__quantity"
      );
      newDivContentSettings.appendChild(newDivContentSettingsQuantity);

      let newPQuantite = document.createElement("p");
      newPQuantite.innerText = "Qté :";
      newDivContentSettingsQuantity.appendChild(newPQuantite);

      let newPInput = document.createElement("input");
      newPInput.setAttribute("type", "number");
      newPInput.setAttribute("class", "itemQuantity");
      newPInput.setAttribute("name", "itemQuantity");
      newPInput.setAttribute("min", "1");
      newPInput.setAttribute("max", "100");
      newPInput.setAttribute("value", `${returnProducts.quantite}`);
      newDivContentSettingsQuantity.appendChild(newPInput);

      let newDivContentSettingsDelete = document.createElement("div");
      newDivContentSettingsDelete.setAttribute(
        "class",
        "cart__item__content__settings__delete"
      );
      newDivContentSettings.appendChild(newDivContentSettingsDelete);

      let newPDelete = document.createElement("p");
      newPDelete.setAttribute("class", "deleteItem");
      newPDelete.innerText = "Supprimer";
      newDivContentSettingsDelete.appendChild(newPDelete);
    });
}
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
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  if (!getEmail.value.trim()) {
    let mailErrorMsg = document.getElementById("emailErrorMsg");
    mailErrorMsg.textContent = "Ecrivez votre email";
    return;
  }
  if (!emailRegex.test(getEmail.value)) {
    let mailErrorMsg = document.getElementById("emailErrorMsg");
    mailErrorMsg.textContent = "Ecrivez une adresse email valide";
    return;
  }
});
