var io = require('socket.io-client');

var host = location.search.match(/^\?host=(.*)/)[ 1 ] || 'localhost';

var socket = io('http://' + host);

socket.on('connect', function() {

	// DEBUG
	console.log("connect arguments:", arguments);
} );

socket.on('event', function(data) {

	// DEBUG
	console.log("event arguments:", arguments);
} );

socket.on('disconnect', function() {

	// DEBUG
	console.log("disconnect arguments:", arguments);
} );
