fs = require("fs");

function phoneNumber(err, data) {
  console.log('data:', data)
}

fs.readdir('/home/ubuntu/workspace/', phoneNumber);

console.log("this comes after");