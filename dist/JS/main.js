import {addSpinner} from "./domFunctions.js";
import CurrentLocation from "./CurrentLocation.js";
const currentLoc = new CurrentLocation();

const initApp = () => {
    // listeners
    const geoButton = document.getElementById("getLocation");
    geoButton.addEventListener("click", getGeoWeather);

    // set up

    // load weather
}
// launch app
document.addEventListener("DOMContentLoaded", initApp);

const getGeoWeather = (event) => {
    if (event && event.type === "click") {
      const mapIcon = document.querySelector(".fa-map-marker-alt");
      addSpinner(mapIcon);
    }
    /*if (!navigator.geolocation) return geoError();
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);*/
  };
  