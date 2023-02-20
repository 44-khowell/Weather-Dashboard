



// Build the query URL for the ajax request to the NYT API


// Query URL Working Format 
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=51.507322&lon=-0.127647&appid=fc1a788e45551d795ccebca44d61a4ea";



// Make the AJAX request to the API - GETs the JSON data at the queryURL.
// The data then gets passed as an argument to the updatePage function
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
    console.log(response);
    console.log(response.city.name);
    console.log('temp:',response.list[0].main.temp);
    console.log(response.list[0].wind.speed);
    console.log(response.list[0].main.humidity);
    console.log(JSON.stringify(response.list[0].main.temp));


    const sectionToday = $('<ul>');

    // Create and save references to <p>> elements 
    let location = $('<p>');
    let temp = $('<p>');
    let wind = $('<p>');
    let humidity = $('<p>');
  
    // Assign text to <p> tags 
    console.log("****** Resulting O/P Starts here ******");
    location.text(response.city.name);
    temp.text(response.list[0].main.temp -273);
    //wind.text("Wind: ");
    wind.text(response.list[0].wind.speed);
    humidity.text(response.list[0].main.humidity);
  
    //sectionToday.append(location, 'temp:' + temp, wind, humidity);
    sectionToday.append(location, temp, wind, humidity);

    // Append unOrdered list with <p> tags to ID=today 
    $('#today').append(sectionToday);
   // console.log(response.list[0].wind.speed);
   // console.log(typeof(response.list[0].wind.speed));



// Card creation 
  

});




// CLICK HANDLERS
// ==========================================================






