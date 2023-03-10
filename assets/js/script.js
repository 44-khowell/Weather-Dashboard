//Declared variables linked to html Tags
let todayDiv = document.querySelector('#today');
let forecastDiv = document.querySelector('#forecast');
console.log("#today" ,todayDiv); 
let cardDate0 = document.querySelector('#card-date0');
let cardDate1 = document.querySelector('#card-date1');
let cardDate2 = document.querySelector('#card-date2');
let cardDate3 = document.querySelector('#card-date3');
let cardDate4 = document.querySelector('#card-date4');

var index = 0;  
const historyDiv = $('#history');


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
    alert(errorMsg);
}

// Storage Variables 
var foundCity = localStorage.getItem('cityName');    // Used to get value of City Searched

// ******** Local Storage functions ********
// Store value of Cities Searched and list History of items prevoiusly searched 
function appendToStoreCitySearch(foundCity) {
    
    if (!cityList.includes(foundCity)) {
        cityList.push(foundCity);
        historyDiv.append(`<button class="btn btn-primary mb-2 city" data-city="${foundCity}"> ${foundCity} </button> `);
        localStorage.setItem("cityName", cityList.toString());
    }             
}

// ======================  API 1st Data Request Lat & Lon  =======================
function getCityLatnLonCoOrd(city) { 

    const apiKey = "fc1a788e45551d795ccebca44d61a4ea";

    let limit = 5;

    let openWeatherQueryUrl1 = "https://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit="+limit+"&appid="+apiKey;

    fetch(openWeatherQueryUrl1)
    .then(response => response.json())
    .then(result => {
    
    // Extracting components Latitude & Lonitude from the API response returns
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



// ======================  API 2nd Data Request - Today Section =======================
// Second get today's weather data
function getTodayWeatherData(coOrdLat, coOrdLon) {

    const apiKey = "fc1a788e45551d795ccebca44d61a4ea";

    let openWeatherQueryUrl2 = "https://api.openweathermap.org/data/2.5/forecast?lat="+coOrdLat+"&lon="+coOrdLon+"&appid="+apiKey;

    fetch(openWeatherQueryUrl2)
    .then(response => response.json())
    .then(result => {

        // =================== To-day's Section Display ===========================
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
        var icon = document.createElement('img');
        icon.setAttribute('src',"http://openweathermap.org/img/wn/"+result.list[0].weather[0].icon+"@2x.png")
        tagH3.textContent = result.city.name + ' ('+displayDate+ ')';
        tagH3.appendChild(icon);
        todayDiv.appendChild(tagH3);
    
        tagP = document.createElement("p");
        tagP.textContent = 'Temp: ' +tempcalc.toFixed(2) +' ??C ';
        todayDiv.appendChild(tagP);
    
        p = document.createElement('P')
        p.textContent = 'Wind: '+result.list[0].wind.speed + ' KPH';
        todayDiv.appendChild(p);
    
        p = document.createElement('P')
        p.textContent = 'Humidity: '+result.list[0].main.humidity + ' %';
        todayDiv.appendChild(p);
        
        // ====================== 5-Day Results Display ==============================  

        // Arrays data & 5-day positions 
        let threeHrInt = ['0','8','16','24','32'];
        let cardArr = [cardDate0, cardDate1, cardDate2, cardDate3, cardDate4];

        // Create ul list for each card 
            for (let forecastPos = 0; forecastPos <= 4; forecastPos++) {

                populateCardDate(cardArr[forecastPos], threeHrInt[forecastPos]);
                populateCardIcon(cardArr[forecastPos], threeHrInt[forecastPos]);
                populateCardTemp(cardArr[forecastPos], threeHrInt[forecastPos]);
                populateCardWind(cardArr[forecastPos], threeHrInt[forecastPos]);
                populateCardHumidity(cardArr[forecastPos], threeHrInt[forecastPos]);
                index++
            }

            // ******** Populating 5-day forecast cards *********
            function populateCardDate(cardPosition, timeOfDay) {
                console.log('incomingCardPos: ', cardPosition);
                console.log('3hrArr val: ', timeOfDay);

                var newLi = document.createElement('li');
                cardPosition.appendChild(newLi)
                
                // Extract date from dt_txt:
                console.log(result.list[timeOfDay].dt_txt);
                let date8 = result.list[timeOfDay].dt_txt;
                // Split string returned into an Array 
                const dateArr8 = date8.split(' ');
                // Now extract the date from the array
                displayDate = dateArr8[0];
                newLi.textContent = displayDate;    
            }

            function populateCardIcon(cardPosition, timeOfDay) {

                var newLi = document.createElement('li');
                var icon = document.createElement('img');
                icon.setAttribute('src',"http://openweathermap.org/img/wn/"+result.list[timeOfDay].weather[0].icon+"@2x.png")

                newLi.appendChild(icon);
                cardPosition.appendChild(newLi);
            }

            function populateCardTemp(cardPosition, timeOfDay) {
 
                var newLi = document.createElement('li');
                cardPosition.appendChild(newLi);
                let tempcalc18 = (result.list[timeOfDay].main.temp - 32)*5/9 -128;
                newLi.textContent = 'Temp: ' +tempcalc18.toFixed(2) +' ??C ';                   
            }

            function populateCardWind(cardPosition, timeOfDay) {
 
                var newLi = document.createElement('li');
                cardPosition.appendChild(newLi);
                newLi.textContent = 'Wind: '+result.list[timeOfDay].wind.speed + ' KPH';                    
            }

            function populateCardHumidity(cardPosition, timeOfDay) {
 
                var newLi = document.createElement('li');
                cardPosition.appendChild(newLi);
                newLi.textContent = 'Humidity: '+result.list[timeOfDay].main.humidity + ' %';                    
            }
    })
    // Use this to catch unforseen errors that may occur 
    .catch(function (error) {
        console.log("003", "An error: incorrect parameter received in weather request");
    });
    // Function -end 
}


// CLICK HANDLERS
// ==========================================================

// handling the search city action user input
$("#search-button").on("click", function(event) {
  // Preventing the submit button from trying to submit the form
  event.preventDefault();

   // Here we grab the text from the input box
  cityName = $("#search-input").val().trim();
  console.log('cityname',cityName);

// At id=card-dateX (Tag) Clear any data at from previous search (ready for the next search)
  clearChildDiv (cardDate0);
  clearChildDiv (cardDate1);
  clearChildDiv (cardDate2);
  clearChildDiv (cardDate3);
  clearChildDiv (cardDate4);

  if (cityName === "") {
    showErrorMsg("001","Please enter a city name to search.");
    return;
  }

  // Store search City in Local Storage - History
  appendToStoreCitySearch(cityName);

  // At id=Today (Tag) Clear any data at from previous search 
  clearChildDiv (todayDiv);

  // Get the co-ordinates for the place being searched
  getCityLatnLonCoOrd(cityName);

});


// handling the search city action History Buttons
historyDiv.on('click', '.city', function (event) { // .city is the class of the button
    event.preventDefault();
  
    cityName = $(event.target).attr("data-city");
    console.log("City (historyDiv):"+cityName);
  
    // Get the co-ordinates for the place being searched
    getCityLatnLonCoOrd(cityName);

    // At id=Today (Tag) Clear any data at from previous search 
    clearChildDiv (todayDiv);

    // At id=card-dateX (Tag) Clear any data at from previous search (ready for the next search)
    clearChildDiv (cardDate0);
    clearChildDiv (cardDate1);
    clearChildDiv (cardDate2);
    clearChildDiv (cardDate3);
    clearChildDiv (cardDate4);

  });
