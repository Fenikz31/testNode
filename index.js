const fs = require("fs");
const {join} = require ("path");
const filename = join(__dirname, ".gitignore");

console.log(filename);
fs.readFile(filename,function (error, content) {
	if (!error) {
		console.log(String(content));
	}
	else console.error(error);
})