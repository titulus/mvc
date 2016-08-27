'use strict';

const Controller = require('./controller');
const ViewSTDIO = require('./view-stdio');
const ViewFile = require('./view-file');

let v = new ViewFile('f');
let c = new Controller(1,v);
c.sayhi = function() {
	this.v.write('Hi');
};
c.ask = function(question) {
	if (question) this.v.write(question);
	console.log('answer is:',this.v.read());
};
console.log(c,v);
c.sayhi();
c.ask();
c.ask('what?');
c.ask();