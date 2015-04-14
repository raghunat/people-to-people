var x = document.getElementById("game");

//used to determine accuracy and wait time of location. 
accuracy = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0

};

//Gets waits and gets location and checked to see if browse supports it
function getLocation() {
    if (navigator.geolocation) {
		var id = navigator.geolocation.watchPosition(showPosition, showError, accuracy);
		var waitTill = new Date().setSeconds(new Date().getSeconds + 5); // 5 being 5 seconds later

		while(waitTill > new Date()) {
			// do nothing while waiting for new Date() to be greater than wait Till
			// nothing needs to go here
			navigator.geolocation.clearWatch(id);
		}
		
		//Send to API
	} else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


//get the latitude and longtitude of the positon
function showPosition(position) {

    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
	
};


//error checking
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}





