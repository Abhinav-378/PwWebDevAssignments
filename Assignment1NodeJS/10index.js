const EventEmitter = require('events');
var eventEmitter = new EventEmitter();

console.log("Max listeners: ",eventEmitter.getMaxListeners());

eventEmitter.setMaxListeners(5);

console.log("Max listeners: ",eventEmitter.getMaxListeners());

