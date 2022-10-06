// Write your JavaScript code here!
// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       // Then using pickPlanet() and addDestinationInfo(),
       // Select a planet at random from listedPlanets and pass that information to addDestinationInfo(). 
       // Reload your page and check out your site to see the mission target information.
       const missionTarget = pickPlanet(listedPlanets);
       addDestinationInfo(
        document,
        missionTarget.name,
        missionTarget.diameter,
        missionTarget.star,
        missionTarget.distance,
        missionTarget.moons,
        missionTarget.image
       );
       let form = document.querySelector("form");
       form.addEventListener("submit", function(event){
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let faultyItems = document.getElementById("faultyItems");
        event.preventDefault();
        formSubmission(
            document,
            faultyItems,
            pilotName.value,
            copilotName.value,
            fuelLevel.value,
            cargoMass.value
        );
       });
   });
});



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;