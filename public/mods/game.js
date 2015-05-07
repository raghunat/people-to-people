var GameRoom = (function () {
  'use strict';

  var timeStart, timeEnd, gameEndCheck;

  /**
   * Gets a query parameter by name
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  //get guid
  var socket = io(location.origin + '/game-' + getParameterByName('id'));

  socket.on('connect', function () {
    GameRoom.connected();
    socket.emit('ready', socket.id, getParameterByName(email));
  });

  socket.on('play', function (cards, role) {
    if (role === 'pawn') {
      // update role display
      $('#role').html('Pawn');
      // display cards
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        //update display
        var cardDisplay = cardTemplate.replace(/\{\{id\}\}/g, i);
        cardDisplay = cardDisplay.replace(/\{\{img\}\}/g, card.cardPicture);
        cardDisplay = cardDisplay.replace(/\{\{label\}\}/g, card.cardLabel);
        $('#player-cards').append(cardDisplay);
      }
      //start game!
      timeStart = new Date();
      timeEnd = new Date(timeStart.getSeconds() + 30);
      gameEndCheck = setInterval(function () {
        if (new Date() > timeEnd) {
          GameRoom.pawnChoose(); // no answer
          window.location = '/profile';
          socket.emit('endGame', timeStart, timeEnd);
        }
      }, 1000);
    }
  });


  return {
    connected: function () {
      //TODO Update game room display
      alert('Connected');
    }
  };
})();

/*jshint multistr: true */
var cardTemplate = '<div class="item col s6 m4 offset-l1 l2">\
        <!-- Modal Trigger -->\
          <a class="modal-trigger" href="#modal{{id}}">\
            <img id="Image{{id}}" class="z-depth-1"  src="data:image/png;base64,{{img}}">\
        </a>\
    </div>';

var modalTemplate = '\
  <div id="modal1" class="modal">\
    <div class="modal-content">\
      <img id="Image{{id}}" class="modal-image" src="data:image/png;base64,{{img}}">\
      <h4>{{label}}</h4>\
    </div>\
    <div class="modal-footer">\
        <button href="#!" class="btn modal-action btn-flat" onclick="GameRoom.select({{id}})">Select</button>\
        <button href="#!" class="btn modal-action modal-close btn-flat">Close</button>\
    </div>\
  </div>';
