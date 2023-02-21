// Variables for html Tags 
let todayDiv = document.querySelector('#today');
console.log("#today" ,todayDiv); 

// Build the query URL for the Fetch request to the OpenWeather API

// City Search API
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// let city = 'London';
// let limit = 5;

//"http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit="+limit+"&appid=fc1a788e45551d795ccebca44d61a4ea";

// // Query URL Working Format 
// var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=51.507322&lon=-0.127647&appid=fc1a788e45551d795ccebca44d61a4ea";

// Query URL Working Format 
// openWeatherQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=51.507322&lon=-0.127647&appid=fc1a788e45551d795ccebca44d61a4ea";

//let openWeatherQueryUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit="+limit+"&appid=fc1a788e45551d795ccebca44d61a4ea";


// const apiKey = "fc1a788e45551d795ccebca44d61a4ea";

// let coOrdLon = -0.127647;
// let coOrdLat = 51.507322;

// let openWeatherQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?lat="+coOrdLat+"&lon="+coOrdLon+"&appid="+apiKey;


/// ======================  API 1st Data Request Lat & Lon  =======================
// const apiKey = "fc1a788e45551d795ccebca44d61a4ea";

// let city = 'London';
// let limit = 5;

// let openWeatherQueryUrl1 = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit="+limit+"&appid=fc1a788e45551d795ccebca44d61a4ea";


// fetch(openWeatherQueryUrl1)
// .then(response => response.json())
// .then(result => {
//     console.log('url1' ,result);
//     // Extracting components Latitude & Lonitude from the API response returns
//     console.log(result[0].lat);
//     console.log(result[0].lon);
// });



/// ======================  API 2nd Data Request Today Section =======================
// fetch(openWeatherQueryUrl)
// .then(response => response.json())
// .then(result => {
//     console.log(result);
//     console.log(result.city.name);

//     // Extracting components from the API response returns 
//     let tempcalc = (result.list[0].main.temp - 32)*5/9 -128;
//     console.log(tempcalc.toFixed(2));
//     console.log(result.list[0].wind.speed);
//     console.log(result.list[0].main.humidity);

//     // Extract date from dt_txt:
//     console.log(result.list[0].dt_txt);
//     let date = result.list[0].dt_txt;
//     // Split string returned into an Array 
//     const dateArr = date.split(' ');
//     // Now extract the date from the array
//     displayDate = dateArr[0];


//     // Appending weather info to today tag
//     var tagH3 = document.createElement("h3");
//     tagH3.textContent = result.city.name + ' ('+displayDate+ ')';
//     todayDiv.appendChild(tagH3);


//     tagP = document.createElement("p");
//     tagP.textContent = 'Temp: ' +tempcalc.toFixed(2) +' °C ';
//     todayDiv.appendChild(tagP);

//     p = document.createElement('P')
//     p.textContent = 'Wind: '+result.list[0].wind.speed + ' KPH';
//     todayDiv.appendChild(p);

//     p = document.createElement('P')
//     p.textContent = 'Humidity: '+result.list[0].main.humidity + ' %';
//     todayDiv.appendChild(p);

   
// })
// // Use this to catch unforseen errors that may occur 
//  .catch(function (error) {
//     console.log("An error occurred");
// });



// ======================  API 1st Data Request Lat & Lon  =======================
function getCityLatnLonCoOrd(city) { 

    const apiKey = "fc1a788e45551d795ccebca44d61a4ea";

    let limit = 5;

    let openWeatherQueryUrl1 = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit="+limit+"&appid="+apiKey;

    fetch(openWeatherQueryUrl1)
    .then(response => response.json())
    .then(result => {
    console.log('url1' ,result);
    // Extracting components Latitude & Lonitude from the API response returns
    console.log('lat',result[0].lat);
    console.log('lon',result[0].lon);
    let latitude = result[0].lat;
    let lontitude = result[0].lon

    // Call function to display To-day's weather 
    getTodayWeatherData(latitude, lontitude);

    })
    // Use this to catch unforseen errors that may occur 
    .catch(function (error) {
        console.log("An error occurred in lat & lon ");
    });
}

// ======================  API 2nd Data Request Today Section =======================
// Second get today's weather data
function getTodayWeatherData(coOrdLat, coOrdLon) {

    const apiKey = "fc1a788e45551d795ccebca44d61a4ea";

    let openWeatherQueryUrl2 = "https://api.openweathermap.org/data/2.5/forecast?lat="+coOrdLat+"&lon="+coOrdLon+"&appid="+apiKey;

    fetch(openWeatherQueryUrl2)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        console.log(result.city.name);
    
        // Extracting components temp, wind & humidty from the API response returns 
        let tempcalc = (result.list[0].main.temp - 32)*5/9 -128;
        console.log(tempcalc.toFixed(2));
        console.log(result.list[0].wind.speed);
        console.log(result.list[0].main.humidity);
    
        // Extract date from dt_txt:
        console.log(result.list[0].dt_txt);
        let date = result.list[0].dt_txt;
        // Split string returned into an Array 
        const dateArr = date.split(' ');
        // Now extract the date from the array
        displayDate = dateArr[0];
    
    
        // Appending weather info to today tag
        var tagH3 = document.createElement("h3");
        tagH3.textContent = result.city.name + ' ('+displayDate+ ')';
        todayDiv.appendChild(tagH3);
    
    
        tagP = document.createElement("p");
        tagP.textContent = 'Temp: ' +tempcalc.toFixed(2) +' °C ';
        todayDiv.appendChild(tagP);
    
        p = document.createElement('P')
        p.textContent = 'Wind: '+result.list[0].wind.speed + ' KPH';
        todayDiv.appendChild(p);
    
        p = document.createElement('P')
        p.textContent = 'Humidity: '+result.list[0].main.humidity + ' %';
        todayDiv.appendChild(p);
    
    })
    // Use this to catch unforseen errors that may occur 
    .catch(function (error) {
        console.log("An error occurred in weather request");
    });
    // function -end 
}

let place = 'London';
var coOrdArr = getCityLatnLonCoOrd(place);


// // return an icon URL for img tag
// let icon = "04n"; 
// function getIconURL(icon) {
//     return "https://openweathermap.org/img/w/" + icon + ".png";
//     }
// let img = getIconURL(icon);
// console.log(img);





// CLICK HANDLERS
// ==========================================================

