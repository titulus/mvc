'use strict';
const readline = require('readline-sync');

class View {
	connect(api) {
		this.api = api;
	};
	write() {
		console.log(Array.prototype.slice.call(arguments));
	};
	read() {
		return readline.question();
	};
};

module.exports = View;