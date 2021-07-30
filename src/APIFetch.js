// var idStrAPIFetch = elt.id; // Obtenez l'identifiant
// elt.id = idStrAPIFetch; // Définir l'identifiant

//const fetch = require("node-fetch");

const getWomen = async () => {

    const response = await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=femmes-illustres-a-paris-portraits&q=&facet=name&facet=tab_name&facet=short_desc');
    
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    };
    
    let i;
    const women = await response.json();

    // setInterval(myTimer,3000)
    //   function myTimer(){

    var ArrayportraitFIP = []

        for(i=0;i<10;i++){
            let recordsSplit = women["records"]
            let resumeParaf = recordsSplit[i]
         // console.log(recordsSplit[i])
            let fieldsSplit = resumeParaf["fields"]
            let name = fieldsSplit["name"]
            let picture = fieldsSplit["thumb_url"]
            let adresse = fieldsSplit["short_desc"]
            let descrip = `${fieldsSplit["desc1"]}\n${fieldsSplit["desc2"]}\n${fieldsSplit["desc3"]}\n${fieldsSplit["desc4"]}\n${fieldsSplit["desc5"]}`
          //let portraitFIP = `${name} <br> Adresse : <br> ${adresse}, Paris <br> ${descrip}<br>`
            let portraitFIP = name + "<br>" +`Adresse : <br> ${adresse}, Paris` +"<br>" +`${descrip}<br>`
          // document.write(portaitFIP)
          //console.log(portraitFIP)

            ArrayportraitFIP.push(portraitFIP)

            var x = document.getElementById("name-test").innerHTML = portraitFIP
  }
  console.log(ArrayportraitFIP)
  return x
}

//   function refresh(){
//     var t = 3000; // rafraîchissement en millisecondes
//     setInterval(defilement(),t)
// }
//   function defilement(){
//     // document.getElementById("name-test").innerHTML = portraitFIP;
//     refresh();
//   }
//   defilement(portraitFIP)
// }

getWomen()

//document.getElementById('winner').innerHTML = 'portaitFIP'
    //  .then(portaitFIP =>
    //      document.write('', portaitFIP))
    //  .catch(err => document.write('rejected', err));