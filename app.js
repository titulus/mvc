'use strict';

const Controller = require('./controller');
const View = require('./view');



let v = new View();
let c = new Controller(1,v);
console.log(c,v);
c.api.a = 1;
v.api.b = 2;
c.c = 3;
console.log(c,v);
console.log(c.c);
c.sayhi();
v.hi();
console.log(v.read());
console.log(v.read());
v.read();