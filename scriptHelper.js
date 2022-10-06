// Write your helper functions here!


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   document.getElementById("missionTarget").innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of Moons: ${moons}</li>
   </ol>
   <img src="${imageUrl}">
   `
}

function validateInput(testInput) {
    //    If test input is equalto "", 
    //    Return the string "Empty".
    //    Use the isNaN(testInput) method to return either not a number or is a number.
    //    False = string
    //    True = number
   if(testInput === ""){
    return "";
   } else if(isNaN(testInput) === true){
        return "Not a Number"
    } else if(isNaN(testInput) === false){
        return "Is a Number"
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    // Notify the user if they forgot to enter a value for any one of the fields.
   if(validateInput(pilot)===""
   ||validateInput(copilot)===""
   ||validateInput(fuelLevel)===""
   ||validateInput(cargoMass)===""){
    alert("All fields are required")
   }
    // The user submits a value that is converted to the correct data type.
    // The pilot and co-pilot names should be strings
    // and the fuel level and cargo mass should be numbers.
   else if(validateInput(pilot)==="Is a Number"
   ||validateInput(copilot)==="Is a Number"
   ||validateInput(fuelLevel)==="Not a Number"
   ||validateInput(cargoMass)==="Not a Number"){
    alert("Please enter valid information for each field")
   }
   // The list of shuttle requirements, should be updated if something is not ready for launch.
   // Using template literals, update the li elements pilotStatus
   // and copilotStatus to include the pilot's name and the co-pilot's name.
   else{
    document.getElementById("pilotStatus").innerHTML =`Pilot ${pilot} is ready for launch.`;
    document.getElementById("copilotStatus").innerHTML =`Co-Pilot ${copilot} is ready for launch.`
   
   // If the user submits a fuel level that is too low (less than 10,000 liters),
   // Change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey.
   // The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" 
   // and the color should change to red.
   if(Number(fuelLevel)<10000){
    list.style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML =`Fuel levels too low for launch.`;
    document.getElementById("launchStatus").innerHTML =`Shuttle NOT ready for launch.`;
    document.getElementById("launchStatus").style.color =`rgb(255,0,0)`
   }
   // If the user submits a cargo mass that is too large (more than 10,000 kilograms),
   // Change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off.
   // The text of launchStatus should also change to "Shuttle not ready for launch"
   // and the color should change to red.
   if(Number(cargoMass)>10000){
    list.style.visibility = "visible";
    document.getElementById("cargoStatus").innerHTML =`Cargo mass too high for launch.`;
    document.getElementById("launchStatus").innerHTML =`Shuttle is NOT ready for launch.`;
    document.getElementById("launchStatus").style.color =`rgb(255,0,0)`
   }
   // If the shuttle is ready to launch,
   // Change the text of launchStatus to green
   // and display "Shuttle is ready for launch".
   if(Number(cargoMass)<= 10000 && Number(fuelLevel)>= 10000){
    list.style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML =`Fuel Level high enough for launch.`;
    document.getElementById("cargoStatus").innerHTML =`Cargo levels low enough for launch.`;
    document.getElementById("launchStatus").innerHTML =`Shuttle is ready for launch.`;
    document.getElementById("launchStatus").style.color =`rgb(0,255,0)`
   }
}
}

async function myFetch() {
    // myFetch() You need to add the URL 
    //return response.json()
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    // pickPlanet() takes in one argument: a list of planets.
    // Using Math.random(), 
    //return one planet from the list with a randomly-selected index
    let planet = Math.floor(Math.random()*planets.length);
    console.log(planets[planet]);
    return planets[planet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch
