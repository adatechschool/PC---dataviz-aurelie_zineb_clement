var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(url, success, error) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200) {
                success(req.responseText);
            } else {
                error(req);
            }
        }
    }
    req.open('GET', url, true);
    req.send();
}

function getWomen() {
    get('https://opendata.paris.fr/api/records/1.0/search/?dataset=femmes-illustres-a-paris-portraits&q=&facet=name&facet=tab_name&facet=short_desc'); 
    function(responseText) {
        var women = JSON.parse(responseText);
      
        let recordsSplit = women["records"]

        let resumeParaf = recordsSplit[0]
        let fieldsSplit = resumeParaf["fields"]

        let name = fieldsSplit["name"]
        console.log(name);

        let picture = fieldsSplit["thumb_url"]
      
      // fetch(fieldsSplit["thumb_url"])
      // .then(response=>console.log(response));
        get(picture, 
            function(response){
            console.log(response)
        }),
            function (error) {
            console.error(error);
        }

        let adresse = fieldsSplit["short_desc"]
        console.log(adresse);

        let descrip = `${fieldsSplit["desc1"]}\n${fieldsSplit["desc2"]}\n${fieldsSplit["desc3"]}\n${fieldsSplit["desc4"]}\n${fieldsSplit["desc5"]}`
        console.log(descrip);
    }
    // function (error) {
    //     console.error(error);
    // }
}   

getWomen();