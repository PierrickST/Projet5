/*let addBasket = document.getElementById('addToCart')
addBasket.addEventListener('click', function(){
   let getSelect = document.getElementById('colors')
   if(!getSelect.value){
    alert('Choisissez une couleur')
    return
}
   let quantity = document.getElementById('quantity')
   if(quantity.value < 1){
    alert ('choisir une quantité supérieur à 0 ')
    return
   }
   if(quantity.value > 100){
    alert('choisir une quantité inférieur à 100')
    return
   }
   
})*/


// début du code 

let fillForm = document.getElementById('order')
fillForm.addEventListener('click',function(event){
    event.preventDefault()
    let getInput = document.getElementById('firstName')
    if(!getInput.value){
        let firstNameErrorMsg = document.getElementById('firstNameErrorMsg')
        firstNameErrorMsg.textContent = 'Ecrivez votre prénom'
        return
    }
    let getLastName = document.getElementById('lastName')
    if(!getLastName.value){
        let lastNameErrorMsg = document.getElementById('lastNameErrorMsg')
        lastNameErrorMsg.textContent = 'Ecrivez votre nom'
        return
    }
    let getAdress = document.getElementById('address')
    if(!getAdress.value){
        let adressErrorMsg = document.getElementById('addressErrorMsg')
        adressErrorMsg.textContent = 'Ecrivez votre adresse'
        return
    }
    let getCity = document.getElementById('city')
    if(!getCity.value){
        let cityErrorMsg = document.getElementById('cityErrorMsg')
        cityErrorMsg.textContent = 'Ecrivez votre ville'
        return
    }
    let getEmail = document.getElementById('email')
    if(!getEmail.value){
        let mailErrorMsg = document.getElementById('emailErrorMsg')
        mailErrorMsg.textContent = 'Ecrivez votre email'
        return
    }
    




})