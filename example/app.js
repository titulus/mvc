'use strict';

const Controller = require('../controller');
const ViewSTDIO = require('../viewers/view-stdio');
const ViewFile = require('../viewers/view-file');
const ModelLS = require('../models/model-localstorage');
const ModelRedis = require('../models/model-redis');
const ModelMongo = require('../models/model-mongo');

let m = new ModelLS('../localstorage');
let v = new ViewSTDIO();
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