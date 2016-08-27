'use strict';
const readline = require('readline-sync');

class View {
	connect(api) {
		this.api = api;
	};
	write() {
		console.log.apply(console,arguments);
	};
	read() {
		return readline.question();
	};
};

module.exports = View;