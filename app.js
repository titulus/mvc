'use strict';

const Controller = require('./controller');
const ViewSTDIO = require('./view-stdio');
const ViewFile = require('./view-file');
const ModelLS = require('./model-localstorage');

let v = new ViewFile('f');
let m = new ModelLS('./localstorage');
let c = new Controller(m,v);
c.sayhi = function() {
	this.v.write('Hi');
};
c.ask = function(question) {
	if (question) this.v.write(question);
	console.log('answer is:',this.v.read());
};
c.extract = function(key) {
	console.log(this.m.get(key));
};
c.store = function(key,value) {
	this.m.post(key,value);
};

console.log(c,v);
c.sayhi();
c.ask();
c.ask('what?');
c.ask();
c.store('a',1);
c.extract('a');