"use strict";

let http = require( "http" );
let Http = http.createServer();
let io = require( "socket.io" )( Http );
let Client = require( "./libs/Client" );
let PORT = 8089;
var data;


io.on( "connection", function( socket ) {
	new Client( socket, io );
} );


Http.listen( PORT, function() {
	console.log( "Server started on port " + PORT );
} );
