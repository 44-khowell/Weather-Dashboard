//Declared variables linked to html Tags
let todayDiv = document.querySelector('#today');
console.log("#today" ,todayDiv); 

const historyDiv = $('#history');

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



// Globle variables 
let cityName = ""; // stores user input
let cityList = []; // for showing history buttons

// Function for clearing prevoius Child elements data 
function clearChildDiv (targetDiv) {
    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }
}

// show error message modal
function showErrorMsg(errorCode, errorMsg) {
    $("#error-code").text("Error: "+errorCode);
    $("#error-msg").text(errorMsg);
    console.log(errorMsg);
    // alert(errorMsg);
}


// Storage Variables 
var foundCity = localStorage.getItem('cityName');    // Used to get value of City Searched

// Local Storage functions 
// Store value of Cities Searched and list History of items prevoiusly searched 
function appendToStoreCitySearch(foundCity) {
    
    if (!cityList.includes(foundCity)) {
        cityList.push(foundCity);
        historyDiv.append(`<button class="btn btn-primary mb-2 city" data-city="${foundCity}"> ${foundCity} </button> `);
        localStorage.setItem("cityName", cityList.toString());
    }             
}

/// ======= To modify ===============
function renderCitySearches() {

    cityhistory = localStorage.getItem('cityName');    // Used to get value of City Searched 

    // Check if fetched storage variable is empty before displaying to page 
    if (cityhistory === null) {
    return;
    }  
    return cityhistory;
}



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
        console.log("002","An error: incorrect data received for lat & lon ");
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
        console.log("003", "An error: incorrect parameter received in weather request");
    });
    // function -end 
}


// let place = 'London';
// var coOrdArr = getCityLatnLonCoOrd(place);


// // return an icon URL for img tag
// let icon = "04n"; 
// function getIconURL(icon) {
//     return "https://openweathermap.org/img/w/" + icon + ".png";
//     }
// let img = getIconURL(icon);
// console.log(img);





// CLICK HANDLERS
// ==========================================================

// handling the search city action user input =
$("#search-button").on("click", function(event) {
  // Preventing the submit button from trying to submit the form
  event.preventDefault();

   // Here we grab the text from the input box
  cityName = $("#search-input").val().trim();
  console.log('cityname',cityName);

  if (cityName === "") {
    showErrorMsg("001","Please enter a city name to search.");
    return;
  }
  
  console.log(typeof(cityName));

  // Store search City in Local Storage - History
  appendToStoreCitySearch(cityName);


  // At id=Today (Tag) Clear any data at from previous search 
  clearChildDiv (todayDiv);

  // Get the co-ordinates for the place being searched
  getCityLatnLonCoOrd(cityName);

});

