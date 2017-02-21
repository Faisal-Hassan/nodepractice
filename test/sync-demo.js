fs = require('fs')

data = fs.readdirSync('/home/ubuntu/workspace/');
console.log('data:', data);

console.log("this comes after");