'use strict';

const fs = require('fs');
const util = require('util');
const path = require('path');

const soapUtils = require('./soap.utils');
const soapDate = require('./soap.date');

let savePath = path.join(__dirname ,'/log/' + soapDate.yyyymmdd(8) + '_server.log');

module.exports.Log = function(content){

    if(!fs.existsSync(savePath))
        soapUtils.CheckDirectoryExist(savePath);

    let formatContent = util.format(content);

    console.log(formatContent)

    fs.appendFileSync(savePath,formatContent + '\n');
}