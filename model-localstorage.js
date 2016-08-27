'use strict';
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

class Model {
	post(key,value) {
		LocalStorage.setItem(key,value);
	};
	get(key) {
		LocalStorage.getItem(key);
	};
};

module.exports = Model;