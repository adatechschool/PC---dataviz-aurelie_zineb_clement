// var idStrAPIFetch = elt.id; // Obtenez l'identifiant
// elt.id = idStrAPIFetch; // Définir l'identifiant
// let gen = document.getElementById("btn");
// gen.addEventListener("click", afficher);
//const fetch = require("node-fetch");

var ArrayportraitFIP = []
let arrayPicture = []
let arrayName = []

const getWomen = async () => {
  const response = await fetch(
    'https://opendata.paris.fr/api/records/1.0/search/?dataset=femmes-illustres-a-paris-portraits&q=&rows=154&sort=short_desc&facet=name&facet=tab_name&facet=short_desc'
  )

  if (response.status !== 200) {
    throw new Error('cannot fetch the data')
  }

  let i
  const women = await response.json()
  let recordsSplit = women['records']
  for (i = 0; i < recordsSplit.length; i++) {

    let resumeParaf = recordsSplit[i]
    let fieldsSplit = resumeParaf['fields']

    let name = fieldsSplit['name']
    arrayName.push(name)

    let picture = fieldsSplit['thumb_url']
    arrayPicture.push(picture)
    ​
    let adresse = fieldsSplit['short_desc']

    let descrip;
    if(fieldsSplit['desc4']==undefined){
      descrip = `${fieldsSplit['desc1']}<br>${fieldsSplit['desc2']}<br>${fieldsSplit['desc3']}`
    }
    else if(fieldsSplit['desc3']==undefined){
      descrip = `${fieldsSplit['desc1']}<br>${fieldsSplit['desc2']}`
    }
    else if(fieldsSplit['desc5']==undefined){
      descrip = `${fieldsSplit['desc1']}<br>${fieldsSplit['desc2']}<br>${fieldsSplit['desc3']}<br>${fieldsSplit['desc4']}`
    }
    else if(fieldsSplit['desc2']==undefined){
      descrip = `${fieldsSplit['desc1']}}`
    }
    else{
      descrip = `${fieldsSplit['desc1']}<br>${fieldsSplit['desc2']}<br>${fieldsSplit['desc3']}<br>${fieldsSplit['desc4']}<br>${fieldsSplit['desc5']}`
    }

    let portraitFIP = `Adresse : ${adresse}, Paris <br> ${descrip}<br>`

    let nameAffiche = `${name}`

    ArrayportraitFIP.push(portraitFIP)
  }

  document.getElementById("petitNom").innerHTML = arrayName[0]
    let photo = document.getElementById('photo')

 photo.setAttribute('src', `${arrayPicture[0]}`)
 document.getElementById("adressAndDesc").innerHTML = ArrayportraitFIP[0]
}

getWomen()

//fonction pour afficher chaque élément du tableau seul avec un interval de X temps

let compteurAffichage = 1
function afficher(){
  document.getElementById("petitNom").innerHTML = arrayName[compteurAffichage]
  let photo = document.getElementById('photo')
  photo.setAttribute('src', `${arrayPicture[compteurAffichage]}`)
  document.getElementById("adressAndDesc").innerHTML = ArrayportraitFIP[compteurAffichage]

  compteurAffichage+=1
  if(compteurAffichage>=ArrayportraitFIP.length){
    compteurAffichage = 0
  } if(compteurAffichage>=arrayName.length){
    compteurAffichage = 0
  }
}

var t = 3000; 
setInterval(afficher,t)

const markers = arrayCoordonneesGPS.map((location, i) => {
  console.log(location)
  return new google.maps.Marker({
    position: location,
    label: labels[i % labels.length],
    map:map,
  });
});
//Add a marker clusterer to manage the markers.
new MarkerClusterer(map, markers, {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
});
//  imagePath: `${path}/m.png`})