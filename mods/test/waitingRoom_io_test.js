var io = require('socket.io-client');
var should = require('should');

describe('Testing Socket IO connection', function () {
  this.timeout(30000); //keep alive for 30 secs
  it('should connect to a running instance', function (done) {
    var client = io.connect('http://localhost:3000/waiting-room'); // Notice /Namespace

    // When I connect
    client.on('connect', function (id) {
      console.log('Emmitting register event');
      client.emit('register', 'MyIdFromSessionOrCookie');
    });

    // When the server says okay
    client.on('registered', function (response) {
      console.log('Recieving registered event');
      response.connected.should.be.true; //jshint ignore:line
      done();
    });
  });
});