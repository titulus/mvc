'use strict';

const Controller = require('./controller');
const ViewSTDIO = require('./view-stdio');
const ViewFile = require('./view-file');
const ModelLS = require('./model-localstorage');

let m = new ModelLS('./localstorage');
let v = new ViewSTDIO('f');
let c = new Controller(m,v);
c.sayhi = function() {
	this.v.write('Hi');
};
c.store = function(key,value) {
	this.m.post(key,value);
};
c.show_val = function(key) {
	let val = this.m.get(key);
	this.v.write(val);
};
c.sayhi();
c.store('a',1);
c.show_val('a');