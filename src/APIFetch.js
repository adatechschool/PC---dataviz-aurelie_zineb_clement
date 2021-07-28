const fetch = require("node-fetch");

const getWomen = async () => {
    const response = await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=femmes-illustres-a-paris-portraits&q=&facet=name&facet=tab_name&facet=short_desc');
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    };
    const women = await response.json();
      let recordsSplit = women["records"]
      let resumeParaf = recordsSplit[0]
      let fieldsSplit = resumeParaf["fields"]
      let name = fieldsSplit["name"]
      //console.log(name);
      let picture = fieldsSplit["thumb_url"]
      let id = picture
      //essayer la fetch sur la picture
      // console.log(picture)
      let adresse = fieldsSplit["short_desc"]
      //console.log(adresse);
      let descrip = `${fieldsSplit["desc1"]}\n${fieldsSplit["desc2"]}\n${fieldsSplit["desc3"]}\n${fieldsSplit["desc4"]}\n${fieldsSplit["desc5"]}`
       //console.log(descrip);
      let portaitFIP = `${name}\n${picture}\n Adresse : \n ${adresse}, Paris\n${descrip}`

    return portaitFIP;
};

getWomen()
    // .then(portaitFIP =>
    //     document.write(portaitFIP))
    // .catch(err => document.write('rejected', err));