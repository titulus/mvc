'use strict';

const redis = require('redis');
const client = redis.createClient();

class Model {
	post(key,value) {
		client.set(key,value);
	};
	get(key,callbak) {
		client.get(key,(e,val)=>{callbak(val)});
	};
};

module.exports = Model;