#!/usr/bin/env node

var fs = require('fs');

fs.writeFile('./test.txt', 'testing', function () {
  console.log(arguments);
});