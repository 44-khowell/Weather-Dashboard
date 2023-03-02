//Declared variables linked to html Tags
let todayDiv = document.querySelector('#today');
console.log("#today" ,todayDiv); 
let cardDate0 = document.querySelector('#card-date0');
let cardDate1 = document.querySelector('#card-date1');
let cardDate2 = document.querySelector('#card-date2');
let cardDate3 = document.querySelector('#card-date3');
let cardDate4 = document.querySelector('#card-date4');
let cardLi0 = document.querySelector('#card-li0');

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
        
        // ====================== 5-Day Results Display ==============================  

         // Extracting components temp, wind & humidty from the API response returns 
        // Extract date from dt_txt:
        console.log(result.list[8].dt_txt);
        let date8 = result.list[8].dt_txt;
        // Split string returned into an Array 
        const dateArr8 = date8.split(' ');
        // Now extract the date from the array
        displayDate = dateArr8[0];

        let tempcalc8 = (result.list[8].main.temp - 32)*5/9 -128;
        console.log(tempcalc8.toFixed(2));
        console.log(result.list[8].wind.speed);
        console.log(result.list[8].main.humidity);
        console.log(result.list[8].weather[0].icon);


        //tagP = document.createElement("li");
        // tagUl = document.createElement('ul');
        // newLi = document.createElement('li');
        // newId = document.createElement('id');

        // newId.setAttribute('id','card0');
        // newLi.appendChild(newId);

        // Arrays data & 5-day positions 
        let threeHrInt = ['0','8','16','32','40'];
        let cardArr = ["cardDate0","cardDate1","cardDate2","cardDate3","cardDate4"];
       

        //console.log(cardArr);

        // Create ul list for each card 
        tagUl = document.createElement('ul');
            for (let forecastPos = 0; forecastPos <= 4; forecastPos++) {
                console.log('in for loop');
                tagUl.setAttribute('style','list-style-type: none; margin: 0; padding: 0;');
                // newLi = document.createElement('li');
                // tagUl.appendChild(newLi);

                //let cardNo = cardArr[i];
                populateCardDate(cardArr[forecastPos], threeHrInt[forecastPos]);
                populateCardIcon(cardArr[forecastPos], threeHrInt[forecastPos]);
                populateCardTemp(cardArr[forecastPos], threeHrInt[forecastPos]);
                populateCardWind(cardArr[forecastPos], threeHrInt[forecastPos]);
                populateCardHumidity(cardArr[forecastPos], threeHrInt[forecastPos]);
            }


            function populateCardDate(cardPosition, timeOfDay) {
                console.log('incomingCardPos: ', cardPosition);
                console.log('3hrArr val: ', timeOfDay);

                if (cardPosition === "cardDate0") {
                    newLi = document.createElement('li');
                    tagUl.appendChild(newLi);
                    cardDate0.appendChild(tagUl);

                    // Extract date from dt_txt:
                    console.log(result.list[timeOfDay].dt_txt);
                    let date8 = result.list[timeOfDay].dt_txt;
                    // Split string returned into an Array 
                    const dateArr8 = date8.split(' ');
                    // Now extract the date from the array
                    displayDate = dateArr8[0];
                    newLi.textContent = displayDate;


                // } else if (cardPosition === "cardDate1") {
                //     newLi = document.createElement('li');
                //     tagUl.appendChild(newLi);
                //     cardDate1.appendChild(tagUl);
                //     newLi.textContent = result.list[timeOfDay].weather[0].icon;
                }
            }

            function populateCardIcon(cardPosition, timeOfDay) {
                console.log('incomingCardPos: ', cardPosition);
                console.log('3hrArr val: ', timeOfDay);

                if (cardPosition === "cardDate0") {
                    newLi = document.createElement('li');
                    tagUl.appendChild(newLi);
                    cardDate0.appendChild(tagUl);
                    newLi.textContent = result.list[timeOfDay].weather[0].icon;                    
                }
            }

            function populateCardTemp(cardPosition, timeOfDay) {
                console.log('incomingCardPos: ', cardPosition);
                console.log('3hrArr val: ', timeOfDay);

                if (cardPosition === "cardDate0") {
                    newLi = document.createElement('li');
                    tagUl.appendChild(newLi);
                    cardDate0.appendChild(tagUl);
                    let tempcalc18 = (result.list[timeOfDay].main.temp - 32)*5/9 -128;
                    newLi.textContent = 'Temp: ' +tempcalc18.toFixed(2) +' °C ';                   
                }
            }

            function populateCardWind(cardPosition, timeOfDay) {
                console.log('incomingCardPos: ', cardPosition);
                console.log('3hrArr val: ', timeOfDay);

                if (cardPosition === "cardDate0") {
                    newLi = document.createElement('li');
                    tagUl.appendChild(newLi);
                    cardDate0.appendChild(tagUl);
                    newLi.textContent = 'Wind: '+result.list[timeOfDay].wind.speed + ' KPH';                    
                }
            }

            function populateCardHumidity(cardPosition, timeOfDay) {
                console.log('incomingCardPos: ', cardPosition);
                console.log('3hrArr val: ', timeOfDay);

                if (cardPosition === "cardDate0") {
                    newLi = document.createElement('li');
                    tagUl.appendChild(newLi);
                    cardDate0.appendChild(tagUl);
                    newLi.textContent = 'Humidity: '+result.list[timeOfDay].main.humidity + ' %';                    
                }
            }

        // tagUl = document.createElement('ul');
        // tagUl.setAttribute('style','list-style-type: none; margin: 0; padding: 0;');
        // newLi = document.createElement('li');
        // tagUl.appendChild(newLi);
        // newLi.textContent = result.list[8].weather[0].icon;
        // cardDate0.appendChild(tagUl);


        // cardLi0.setAttribute(list-style-type, none);
        // cardLi0.textContent = 'Icon: ' +result.list[8].weather[0].icon;
        // cardDate0.appendChild(cardLi0);

        // tagP = document.createElement("li");
        // tagP.textContent = 'Temp: ' +tempcalc8.toFixed(2) +' °C ';
        // cardDate0.appendChild(tagP);

        // tagP = document.createElement("li");
        // tagP.textContent = 'Wind: '+result.list[8].wind.speed + ' KPH';
        // cardDate0.appendChild(tagP);

        // tagP = document.createElement("li");
        // tagP.textContent = 'Humidity: '+result.list[8].main.humidity + ' %';
        // cardDate0.appendChild(tagP);

        // p = document.createElement('P')
        // p.textContent = displayDate;
        // cardDate0.appendChild(tagP);



        // Extract date from dt_txt:
        console.log(result.list[16].dt_txt);
        let date16 = result.list[16].dt_txt;
        // Split string returned into an Array 
        const dateArr16 = date16.split(' ');
        // Now extract the date from the array
        displayDate = dateArr16[16];
        let tempcalc16 = (result.list[16].main.temp - 32)*5/9 -128;
        console.log(tempcalc16.toFixed(2));
        console.log(result.list[16].wind.speed);
        console.log(result.list[16].main.humidity);
        console.log(result.list[16].weather[0].icon);


        // Extract date from dt_txt:
        console.log(result.list[24].dt_txt);
        let date24 = result.list[24].dt_txt;
        // Split string returned into an Array 
        const dateArr24 = date24.split(' ');
        // Now extract the date from the array
        displayDate = dateArr24[24];
        let tempcalc24 = (result.list[24].main.temp - 32)*5/9 -128;
        console.log(tempcalc24.toFixed(2));
        console.log(result.list[24].wind.speed);
        console.log(result.list[24].main.humidity);
        console.log(result.list[24].weather[0].icon);


        // Extract date from dt_txt:
        console.log(result.list[32].dt_txt);
        let date32 = result.list[32].dt_txt;
        // Split string returned into an Array 
        const dateArr32 = date32.split(' ');
        // Now extract the date from the array
        displayDate = dateArr32[32];
        let tempcalc32 = (result.list[32].main.temp - 32)*5/9 -128;
        console.log(tempcalc32.toFixed(2));
        console.log(result.list[32].wind.speed);
        console.log(result.list[32].main.humidity);
        console.log(result.list[32].weather[0].icon);

    })
    // Use this to catch unforseen errors that may occur 
    // .catch(function (error) {
    //     console.log("003", "An error: incorrect parameter received in weather request");
    // });
    // function -end 
}


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

