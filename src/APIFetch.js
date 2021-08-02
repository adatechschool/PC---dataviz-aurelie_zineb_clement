// var idStrAPIFetch = elt.id; // Obtenez l'identifiant
// elt.id = idStrAPIFetch; // Définir l'identifiant
//const fetch = require("node-fetch");
var ArrayportraitFIP = []
const getWomen = async () => {
  const response = await fetch(
    'https://opendata.paris.fr/api/records/1.0/search/?dataset=femmes-illustres-a-paris-portraits&q=&facet=name&facet=tab_name&facet=short_desc'
  )
  if (response.status !== 200) {
    throw new Error('cannot fetch the data')
  }
  let i
  const women = await response.json()
  for (i = 0; i < 10; i++) {
    let recordsSplit = women['records']
    let resumeParaf = recordsSplit[i]
    let fieldsSplit = resumeParaf['fields']
    let name = fieldsSplit['name']
    let picture = fieldsSplit['thumb_url']
    let adresse = fieldsSplit['short_desc']
    let descrip = `${fieldsSplit['desc1']}<br>${fieldsSplit['desc2']}<br>${fieldsSplit['desc3']}<br>${fieldsSplit['desc4']}<br>${fieldsSplit['desc5']}`
    let portraitFIP = `${name} <br> Adresse : ${adresse}, Paris <br> ${descrip}<br>`
    ArrayportraitFIP.push(portraitFIP)
  }
document.getElementById("name-test").innerHTML = ArrayportraitFIP[0]
}
getWomen()

//fonction pour afficher chaque élément du tableau seul avec un interval de X temps
let compteurAffichage = 1
function afficher(){
  console.log(ArrayportraitFIP[compteurAffichage])
  document.getElementById("name-test").innerHTML = ArrayportraitFIP[compteurAffichage]
  compteurAffichage+=1
  if(compteurAffichage>=ArrayportraitFIP.length){
    compteurAffichage = 0
  }
}
  var t = 10000000000; 
  setInterval(afficher,t)
