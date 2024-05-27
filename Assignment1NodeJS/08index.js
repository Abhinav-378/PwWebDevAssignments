const EventEmitter=require('events');
var eventEmitter = new EventEmitter();

eventEmitter.on('suscribe', (channelName) => {
    console.log(`Thanks for suscribing to ${channelName}`);
 });

 eventEmitter.emit('suscribe','College Wallah')