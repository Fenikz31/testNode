const util = require("util");
const {promisify} = require("util");  // const promisify = require("util").promisify;

const {readdir} = require("fs");
const readdirPromise = promisify(readdir);

readdir(".",(err,files)=>{
    if(err) return;
    console.log(files);
});

readdirPromise.then(files => console.log(files)).catch(e => console.error(e));