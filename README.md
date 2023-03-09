# Module 8 Server-Side APIs: Weather Dashboard

## Description

For this project given the outline of my On-the-job ticket, my main objectives is to:

  * Use Server APIs to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

  * To achieve this aim, this app will use the 5 Day Weather Forecast API from openweathermap.org to retrieve 
weather data for cities around the world.


## User Story

```text
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

The user is presented with a Weather Dash Board 
 
* Search Field: - User enters City to be searched 

                - Search button is then clicked x7 things happen 
                - User is presented with selected city in Central view 
                - The Location is listed	
                - Current Date 
                - Weather Icon displayed
                - Temp displayed
                - Wind displayed
                - Humidity displayed		            

  Action: An eventListener() is actioned to GET a response from OpenWeatherMap URL
  
  Action: The response is read and Key items extracted 
  
  Action: The Key data items are appended to <id> within Central view of the form within the Html page (City, Date, Temp, Wind, Humidity, Icon)

  Action: The 5-day forecast Cards key data items are also appended to <id> representing them (Date,Temp, Wind, Humidity, Icon)

  Action: The user input Search value stored
 
  Action: The chosen City is added as Search history as a Button
 
 * Search History: - User clicks on a city listed from an earlier search history 
 
                   - The user is presented with this city and it becomes the Central view 
                   - The Key data items are updated with the current weather conditions
                   - The 5-day forecast Cards key data items also updated to feature future weather conditions ahead 
 
  Action: - An eventLister() is action to GET Past searched (City name) from storage 
 
         - The Same eventLister() is action to GET a response from OpenWeatherMap URL (using the stored City name)
 
  Action: The GET a response from OpenWeatherMap URL is read and Key items extracted 
 
  Action: The Key data items are appended to <id> within Central view of the form within the Html page
 
  Action: The 5-day forecast Cards key data items are also appended to <id> representing them
 
 HTML Page Construction Components
 
   - Bootstrap Jumbotron Header
   - x1 Search Field 
   - x1 BUTTON - linked to search field 
   - x6 BUTTON’s - Dynamically created when chosen City is selected 
   - x1 Location Display (Form)
   - x5 (5-day Forecast) Cards
 
 
## Mock-Up

The following image shows the web application's final appearance and functionality:

 
 ![Weather-Dashboard-Demo](https://user-images.githubusercontent.com/119610043/224177604-aeb55699-df45-475d-b0b1-7a3a0f7b5d2c.png)

 
 ## Page Link :pushpin:
 
 My GitHub Link: https://github.com/44-khowell/Weather-Dashboard
 
 URL of the deployed application: 
 
 
 
 ## Credits :pushpin:

 Refernces

## License :pushpin:
 
  Copyright (c) Keith Howell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 
 
