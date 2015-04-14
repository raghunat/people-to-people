var Geolocation = (function() {
//makes variable just for geolocation
//creates a wait time of 5 seconds to get accurate position
  var accuracy = {
    enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
  };

// "Global" code
  var x = document.getElementById("game");
  
  return {
      get: function () {
			//waits and gets location and checks to see if browser is supported. 
			if (navigator.geolocation) {
				var id = navigator.geolocation.watchPosition(Geolocation.showPosition, Geolocation.showError, accuracy);
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

      },
      showPosition: function (position) {
	  //gets latitude and longitude of position
	  x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
      },
      showError: function (error) {
	  //error checking function
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
  }
})() ;


Geolocation.get();






