var fs = require("fs");

fs.readdir('/home/ubuntu/workspace', function(err, data) {
  console.log(data);
});