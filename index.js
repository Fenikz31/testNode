const fs = require('fs');
const { join, parse } = require('path');
const { tmpdir } = require('os');
// const filename = join(__dirname, '.gitignore');
// const file = join(__dir, 'test');

const dirTarget = join(tmpdir(), 'test');
const filenameext = parse(__filename).base;

console.log(dirTarget);
fs.mkdir(dirTarget,function (error) {
	if (!error) {
		fs.copyFile(__filename, dirTarget + "/copyIndex.js", function (error) {
			if (!error) {
				console.log(`Le fichier ${filenameext} a bien été copié dans le fichier de destination`)
			} 
		});
	} else {
		console.error("L'erreur suivante est survenue: " +error);
	}
});

// console.log(filename);
// fs.readFile(filename, function(error, content) {
// 	if (!error) {
// 		console.log(String(content));
// 	}
// 	else console.error(error);
// });

// fs.readdir('.', function(error, files) {
// 	console.log(String(files));
// });

// fs.copyFile(__filename, file, function(error) {
// 	if (error === null) console.log(`La copie vers ${file} s'est bien passée`);
// });
