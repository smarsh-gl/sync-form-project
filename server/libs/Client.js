"use strict";
let DataStore = require( "./dataStore" );
const SYNC_EVENT = "sync";

module.exports = exports = class Client {
	constructor( socket, io ) {
		this.socket = socket;
		this.io = io;

		this._addRoutes();
		this._init();
	}

	_addRoutes() {
		this._addOnSyncListener();
	}

	_init() {
		let data = DataStore.get();
		this._socketEmitSync( data );
	}

	_addOnSyncListener() {
		this.socket.on( SYNC_EVENT, function( data ) {
			DataStore.set( data );
			this._ioEmitSync( data )
		}.bind( this ) );
	}


	_ioEmitSync( data ) {
		this.io.emit( SYNC_EVENT, data );
	}

	_socketEmitSync( data ) {
		this.socket.emit( SYNC_EVENT, data );
	}

}