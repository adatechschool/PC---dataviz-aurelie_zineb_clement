let gen = document.getElementById("btn");
gen.addEventListener("click", fetchPics);
//const fetch = require("node-fetch");
let arrayPicture = []
function fetchPics () {
  fetch(
    'https://opendata.paris.fr/api/records/1.0/search/?dataset=femmes-illustres-a-paris-portraits&q=&facet=name&facet=tab_name&facet=short_desc'
  )
    .then((response) => response.json())
    .then((data) => {
      let womenImgDiv = document.querySelector('.womenImgDiv')
      womenImgDiv.innerHTML= ''
      for (let i = 0; i < 10; i++) {
        let recordsSplit = data['records']
        let resumeParaf = recordsSplit[i]
        let fieldsSplit = resumeParaf['fields']
        picture = fieldsSplit['thumb_url']
        arrayPicture.push(picture)
    }
    let photo = document.getElementById('photo')
    console.log(photo)
    photo.setAttribute('src', `${arrayPicture[0]}`)
  })
}
fetchPics()
let truc
//Afficher les photos en boucles sur le web
let compteurAffichage = 1
function afficher () {
    let photo = document.getElementById('photo')
    console.log(photo)
    photo.setAttribute('src', `${arrayPicture[compteurAffichage]}`)
  compteurAffichage += 1
  if (compteurAffichage >= arrayPicture.length) {
    compteurAffichage = 0
  }
}
var t = 3000 // rafraîchissement en millisecondes
setInterval(afficher, t)

