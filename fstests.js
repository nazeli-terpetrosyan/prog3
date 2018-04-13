var fs = require('fs');
var obj = {
    "first_name": "Nazeli",
    "last_name": "Ter-Petrosyan",
    "age": 13,
    "tumo_student": true
}

function main(){
    var json = JSON.stringify(obj);
    fs.appendFileSync("obj.json", json);
}
main();