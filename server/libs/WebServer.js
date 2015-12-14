"use strict";
let config = require( "./../../config" );
let Inert = require('inert');
let Hapi = require( "hapi" );




class WebServer {
	constructor() {
		this.server = new Hapi.Server();
		this.server.register( Inert, function() {} );
		this.server.connection( {
			port: config.webServerPort
		} );
		this._addRoutes();
		this._startServer();
	}


	_addRoutes() {
		this.server.route( {
			path: "/{file}",
			method: "GET",
			handler: function( request, reply ) {
				let file = request.params.file;
				reply.file( "./../client/" + file );

			}
		} );
		this.server.route( {
			path: "/{folder}/{file}",
			method: "GET",
			handler: function( request, reply ) {
				let file = request.params.file;
				let folder = request.params.folder;
				reply.file( "./../client/" + folder + "/" + file );

			}
		} );
		this.server.route( {
			path: "/",
			method: "GET",
			handler: function( request, reply ) {
				reply.file( "./../client/index.html" );

			}
		} );
	}



	_startServer() {
		this.server.start( function() {
			console.log( "Web Server started on port " + config.webServerPort );
		} );
	}
}



let webServerInstance = new WebServer();


module.exports = exports = webServerInstance;

