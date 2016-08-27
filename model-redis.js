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
// client.set('asd',1);
// client.del('asd')
// client.get('asd',(e,val)=>console.log(val));
module.exports = Model;