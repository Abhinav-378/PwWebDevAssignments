const EventEmitter = require('events');
var eventEmitter = new EventEmitter();

var fun1 = (msg) => {
	console.log("Message from fun1: " + msg);
};

eventEmitter.on('myEvent', fun1);
eventEmitter.emit('myEvent', "Event occurred");
// Output: Message from fun1: Event occurred

eventEmitter.removeAllListeners('myEvent');
eventEmitter.emit('myEvent', "Event occurred");
//No output
