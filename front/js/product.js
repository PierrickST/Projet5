let url = new URLSearchParams(window.location.search)
let showId = url.get("id")
console.log(showId); 




fetch (`http://localhost:3000/api/products/${showId}`).then (function (response){
    return response.json()
}).then(function (data){
    console.log(data);
    
    let img = document.createElement('img')
        img.setAttribute ("src", data.imageUrl)
        img.setAttribute("alt", data.altTxt)
    let showImg = document.querySelector('.item__img')
    showImg.appendChild(img)

    let title = document.getElementById('title')
    title.textContent = data.name


})
