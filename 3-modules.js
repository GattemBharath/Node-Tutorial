//? CommonJS, every file is module (by default)
//? Modules - Encapsulated Code (only share minimum)

const { simha, akhila } = require("./4-first-module");
const sayHi = require("./5-second-module");
const data = require("./6-alternative-flavour");
// console.log(data);
require("./7-mind-grenade");
sayHi("Bharath");
sayHi(simha);
sayHi(akhila);
