const fs = require('fs');

const input = process.argv;

if(input[2]=='add'| input[2]=='create'){
    fs.writeFileSync(input[3], input[4])
    console.log("File is created");
}else if(input[2]=='remove'|input[2]=='delete'){
    fs.unlinkSync(input[3]);
    console.log("File is deleted")
}else{
    console.log("Invalid Input");
}