const fs = require('fs');

const path = require('path');
const dirPath = path.join(__dirname, 'Files')

// Creating File
// fs.writeFileSync(dirPath+'/apple.txt', 'This is a simple text file')

// Reading File
// fs.readFile(dirPath+'/apple.txt','utf-8',(err, item)=>{
//     console.log(item);
// })

fs.appendFile(dirPath+'/apple.txt', ' And this is updated version',(err, item)=>{
    console.log("File updated")
})