export const setLocationObject = (locationObj, coordObj) => {
    const {lat, lon, name, uint} = coordObj;
    locationObj.setLat(lat);
    locationObj.setLon(lon);
    locationObj.setName(name);
    if (uint) {
        locationObj.setUnit(unit);
    }
};