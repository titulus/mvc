'use strict';

const Controller = require('./controller');
const ViewSTDIO = require('./view-stdio');
const ViewFile = require('./view-file');
const ModelLS = require('./model-localstorage');
const ModelRedis = require('./model-redis');

let m = new ModelRedis();
let v = new ViewSTDIO('f');
let c = new Controller(m,v);
c.sayhi = function() {
	this.v.write('Hi');
};
c.store = function(key,value) {
	this.m.post(key,value);
};
c.show_val = function(key) {
	this.m.get(key,val=>this.v.write(val));
};
c.sayhi();
c.store('a',1);
c.show_val('a');