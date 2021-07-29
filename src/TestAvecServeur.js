const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;
const server = http.createServer((req, res) => {  
    
    const fetch = require('node-fetch');
    function api(){
        fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=femmes-illustres-a-paris-portraits&q=&facet=name&facet=tab_name&facet=short_desc',{
            mode: 'no-cors'
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
        //console.log(data);
            let apiQuotes = data;
            res.end(apiQuotes.affirmation);
            console.log(apiQuotes.affirmation);
})
        .catch((err) => {console.log(err)})
}

api();  

res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
  //res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});