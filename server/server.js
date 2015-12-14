"use strict";
require( "./libs/WebServer" );
let http = require( "http" );
let Http = http.createServer();
let io = require( "socket.io" )( Http );
let Client = require( "./libs/Client" );
let config = require( "./../config" );

let PORT = config.socketServerPort;

io.on( "connection", function( socket ) {
	new Client( socket, io );
} );


Http.listen( PORT, function() {
	console.log( "Server started on port " + PORT );
} );
