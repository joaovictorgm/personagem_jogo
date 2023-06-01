const {Mage, Warrior, Thief} = require('./index.js');

const Azadriel= new Mage('Azadriel', 100, 20, 10, 30 );
const Dan = new Warrior('Dan', 150, 30, 15, 20);
const Jarek = new Thief('Jarek', 120, 25, 10, 8);
console.table({Azadriel, Dan, Jarek})
Azadriel.hit(Dan);
console.table({Azadriel, Dan, Jarek})
Dan.hit(Azadriel);
console.table({Azadriel, Dan, Jarek})
Dan.choosePosition();
console.table({Azadriel, Dan, Jarek})
Azadriel.heal(Dan);
console.table({Azadriel, Dan, Jarek})
Jarek.hit(Azadriel);
console.table({Azadriel, Dan, Jarek})
Dan.hit(Jarek)