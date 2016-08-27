'use strict';
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

class Model {
	post(key,value) {
		LocalStorage.setItem(key,value);
	};
	get(key) {
		LocalStorage.getItem(key);
	};
};

module.exports = Model;