const { log } = require('console');
const fs = require('fs');

// fs.writeFileSync("Soul1.txt","Data in file");
const st = fs.readFileSync("Soul1.txt");
console.log(st)