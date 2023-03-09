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

 
 

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses the OpenWeather API to retrieve weather data.

  * Uses `localStorage` to store persistent data.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
