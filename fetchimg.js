//const fetch = require("node-fetch");
//     const getImg= async () => {
//         const response = await fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=femmes-illustres-a-paris-portraits&q=&facet=name&facet=tab_name&facet=short_desc');
//         if(response.status !== 200){
//             throw new Error('cannot fetch the data');
//         };
//         let i;
//         const women = await response.json();
//         for(i=0;i<10;i++){ 
         
//           let recordsSplit = women["records"]
//           let resumeParaf = recordsSplit[i]
//           let fieldsSplit = resumeParaf["fields"]
//           let picture = fieldsSplit["thumb_url"]
//           return picture
//       }
      
//     };
//     getImg()
      //  const x = document.getElementById('name_test');
        fetch('picture', { mode : 'no-cors'})
         .then(picture => x.src=picture[0].url)
     
        
    
    