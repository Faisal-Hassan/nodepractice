var fs = require("fs");

var tishString = '{ "name": "Tisha" }';

fs.writeFile('tish.json', tishString);

var faisal = {
  name: 'Faisal'
}

fs.writeFile('faisal.json', JSON.stringify(faisal));