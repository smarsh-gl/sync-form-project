"use strict";

class DataStore {
	constructor() {
		this.data = {};
	}

	set( data ) {
		this.data = data;
	}

	get() {
		return this.data;
	}
}




let dataStoreInstance = new DataStore();

module.exports = exports = dataStoreInstance;