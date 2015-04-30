

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

 var socket = io('/waiting-room');

 socket.on('connect', function(){
 
 var location = Geolocation.get();

 socket.emit('register', "ID", location);
 
 
 }
 
  socket.on('connect', function(){
  
  socket.emit('playerExitedClient', "ID");
  
 }
 
 
 

  return {
  
	displayWaitingRoom: function (timeToNextGame) {
	// body...
	},
	gameStart: function ("Specified Role") {
	// body...
	}

}
  
  
      
  }
})() ;




