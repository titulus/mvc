'use strict';
const fs = require('fs');
let f;

class View {
	constructor(filename) {
		f = filename;
	};
	connect(api) {
		this.api = api;
	};
	write() {
		fs.writeFileSync(f,''+Array.prototype.slice.call(arguments))
	};
	read() {
		return fs.readFileSync(f,'UTF8');
	};
};

module.exports = View;