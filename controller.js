'use strict';

class Controller {
	constructor(Model,View) {
		this.m = Model;
		this.api = Object.create(this);
		View.connect(this.api);
		this.v = View;
	};
};
Controller.prototype.sayhi = function(a) {
	this.v.write('Hi',this);
};

module.exports = Controller;