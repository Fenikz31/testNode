const car = {
	name: 'Peugeot',
	color: 'Blue',
	equipment: [ 'climatisation', 'airbag' ],
	year: 2012,
	available: true
};

console.log(car);
console.log();

console.log('La voiture est une ' + car.name);
console.log('La voiture est de couleur ', car.color);
console.log(`Elle date de ${car.year}`);

console.log();
// CHAINES FORMATEES :
// %s --> string
// %d --> number
// %j --> json
// %O --> object (depth = 3 max)
// %o --> object (depth = 5 max)
console.log("elle est √©quip√© de la %s et de l'%s", car.equipment[0], car.equipment[1]);
console.log('JSON: %j', car);
console.log(JSON.stringify(car));

console.log();
console.log('%o', { a: { b: { c: { d: { e: { f: 'f' } } } } } });
console.log('%O', { a: { b: { c: { d: { e: { f: 'f' } } } } } });

console.time("myTimer");
for (let i = 0; i < 20000; i++);
console.timeEnd("myTimer");

const fs = require("fs");
const stdout = fs.createWriteStream("./stdout.log");
const stderr = fs.createWriteStream("./stderr.log");

const Console = require("console").Console;
const logger = new Console({stdout, stderr});

console.log();
logger.log("Salut les amis!");
logger.error("Mince une erreur est survenue!");

const path = require('path');

console.log(path.dirname('/index.js'));
console.log(path.basename('/index.js'));
console.log(path.extname('/index.js'));

console.log();
console.log(path.sep);
console.log(path);

console.log();
const from_to = path.relative('..', '.');
const absolutePath = path.resolve('.', 'abc', 'test.txt');

console.log(from_to);
console.log(absolutePath);

console.log();
console.log(path.parse('/abc.txt'));

// MODULE URL
const url = "https://dwaps.fr:8787/ort-toulouse/exercices/?eval=react#lab1";
const dwapsUrl = new URL(url);

console.log(dwapsUrl.toString());
console.log(dwapsUrl);
console.log(dwapsUrl.hostname);

const sp = dwapsUrl.searchParams;

console.log();
console.log(sp.get("eval"));

// Suppresion d'ÈlÈments dans l'URL
const format = require("url").format;
const options = {
	auth: false,
	search: false,
	fragment: false
}
console.log();
console.log(require("url").format(dwapsUrl,options));
