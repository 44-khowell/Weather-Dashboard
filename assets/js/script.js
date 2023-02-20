



// Build the query URL for the ajax request to the NYT API

// Query URL Working Format 
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=51.507322&lon=-0.127647&appid=fc1a788e45551d795ccebca44d61a4ea";

const apiKey = "fc1a788e45551d795ccebca44d61a4ea";

let coOrdLon = -0.127647;
let coOrdLat = 51.507322;

// let openWeatherQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=51.507322&lon=-0.127647&appid="+apiKey;

let openWeatherQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+coOrdLat+"&lon="+coOrdLon+"&appid="+apiKey;


fetch(openWeatherQueryUrl)
.then(response => response.json())
.then(result => {
    console.log(result);
    console.log(result.city.name);

    let tempcalc = (result.list[0].main.temp - 32)*5/9 -128;
    console.log('temp:',tempcalc.toFixed(2));
    console.log(result.list[0].wind.speed);
    console.log(result.list[0].main.humidity);
    console.log(JSON.stringify(result.list[0].main.temp));


})

// const apiKey = "057aa2c42e8e4730af75e101b91db1a7";
//   console.log("City: "+cityName);
//   let geoQueryURL = "https://api.geoapify.com/v1/geocode/search?text="+cityName;

//   // get placeID from Geocoding API
//   fetch(geoQueryURL+"&apiKey="+apiKey, requestOptions)
//   .then(groResponse => groResponse.json())
//   .then(geoResult => {
//     console.log(geoResult);





// CLICK HANDLERS
// ==========================================================

