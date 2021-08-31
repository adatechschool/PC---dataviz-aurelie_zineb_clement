//const fetch = require("node-fetch");
let arrayCoordonneesGPS = []
const locations = async () => {
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
    let coordonneesGPS = fieldsSplit["geo_point_2d"]
    arrayCoordonneesGPS.push({"lat": coordonneesGPS[0], "lng" : coordonneesGPS[1]})
  }
  
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: { lat: 48.866669, lng: 2.33333 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = arrayCoordonneesGPS;

    const markers = arrayCoordonneesGPS.map((location, i) => {
      console.log(location)
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        map:map,
      });
    });

    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  initMap()
}
locations()