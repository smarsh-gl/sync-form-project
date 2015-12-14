var io = require('socket.io-client');

var host = location.search.match(/^\?host=(.*)/)[ 1 ] || 'localhost';

var socket = io('http://' + host);

var input = document.createElement('textarea')
document.body.appendChild(input)

input.addEventListener('keyup', (e) => {
	console.log(e)
	socket.emit('sync', { data: e.target.value})
})

socket.on('connect', function() {

	// DEBUG
} );

socket.on('sync', function(data) {
	input.value = data.data
	// DEBUG

} );

socket.on('disconnect', function() {

	// DEBUG
	console.log("disconnect arguments:", arguments);
} );
