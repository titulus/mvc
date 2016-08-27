'use strict';
const redis = require('redis');
let client;

class Model {
	constructor(){
		client = redis.createClient();
	};
	post(key,value) {
		client.set(key,value);
	};
	get(key,callbak) {
		client.get(key,(e,val)=>{callbak(val)});
	};
};

module.exports = Model;