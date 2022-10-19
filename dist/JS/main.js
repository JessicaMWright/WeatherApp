import { setLocationObject } from "./dataFunctions.js";
import {addSpinner, displayError} from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();

const initApp = () => {
    // listeners
    const geoButton = document.getElementById("getLocation");
    geoButton.addEventListener("click", getGeoWeather);

}
// launch app
document.addEventListener("DOMContentLoaded", initApp);

const getGeoWeather = (event) => {
    if (event && event.type === "click") {
      const mapIcon = document.querySelector(".fa-map-marker-alt");
      addSpinner(mapIcon);
    }
    // check for geolocation support in browser
    if (!navigator.geolocation) return geoError();
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  };

  const geoError = (errObj) => {
    const errMsg = errObj ? errObj.message : "Geolocation not supported";
    displayError(errMsg, errMsg);
  };

  const geoSuccess = (position) => {
    const myCoordsObj = {
      lat: position.coords.latitude,
      lon: position.coords.longatude,
      name: `Lat:${position.coords.latitude} Long:${position.coords.longitude}`
    };
    //set location object
    //update data and display
    setLocationObject(currentLoc, myCoordsObj);
    updateDataandDisplay(currentLoc);

  };

  const updateDataAndDisplay = async (locationObj) => {
    const weatherJson = await getWeatherFromCoords(locationObj);
    if (weatherJson)updateDataAndDisplay(weatherJson,locationObj);
  }

  