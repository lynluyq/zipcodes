#!/usr/bin/env node

var path = require('path'),
    zipcodes = require(path.join(__dirname, '../', 'lib'));

//console.log(zipcodes.lookupByState('CA'))
console.log(zipcodes.lookupByName('castro valley', 'CA').map(d => d.zip))