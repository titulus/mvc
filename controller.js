'use strict';

class Controller {
	constructor(Model,View) {
		this.m = Model;
		this.api = Object.create(this);
		View.connect(this.api);
		this.v = View;
	};
};

module.exports = Controller;