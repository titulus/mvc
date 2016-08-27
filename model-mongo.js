'use strict';
const mongo_client = require('mongodb').MongoClient;

let url;
let colname;
class Model {
	constructor(path,name) {
		url = path;
		colname = name;
	};
	post(key,value) {
		mongo_client.connect(url, function(err, db) {
			let col = db.collection(colname);
			col.update({key:key},{key:key,val:value},{upsert:true});
		});
	};
	get(key,callback) {
		mongo_client.connect(url, function(err, db) {
			let col = db.collection(colname);
			col.find({key:key}).toArray((e,i)=>callback(i[0].val))
		});
	};
};

module.exports = Model;