

//will control events (database/mods are figuring out)
//server emits events like 
	//How much time left until games starts. 

//HTML Chat file (var io =)
//function we call to emit an event like "connect", "Im here", "Im ready", 

//global protected area 
	//list event handlers
		//IO.on game start
		//IO.on update time 
		//whatever they figure out
		

//scaffold object for them to fill out with code. 


var WatingRoom = (function() {
 // "Global" "Protected" variables
 var io = {
	require('socket.io');
 }
	//calls Geolocation function in order to use
	   Geolocation();

  return {
      socket.on: function (enteringWaitingRoom, playerID, Geolocation) {
        // body...
      },
      : function (displayWaitingRoom, timeToNextGame) {
        // body...
      },
      : function (playerExitedClient, playerID) {
        // body...
      }
	  functionName: function (gameStart, SpecificRole) {
        // body...
      }
  }
})() ;


//WaitingRoom.functionName()

