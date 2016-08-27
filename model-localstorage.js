'use strict';
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  var localStorage;
};

class Model {
	constructor(path) {
		localStorage = new LocalStorage(path);
	};
	post(key,value) {
		localStorage.setItem(key,value);
	};
	get(key) {
		return localStorage.getItem(key);
	};
};

module.exports = Model;