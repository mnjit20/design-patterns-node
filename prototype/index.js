var scout_proto = require('./scout_proto');

var alex = scout_proto.clone();
alex.name = ('Alex Banks');
alex.addItemToList('slingshot');

var eve = scout_proto.clone();
eve.name = 'Eve Porcello';
alex.addItemToList('Reading list');


eve.addItemToList('reading light');

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
