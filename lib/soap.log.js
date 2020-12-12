'use strict';

const fs = require('fs');
const util = require('util');
const path = require('path');

const soapUtils = require('./soap.utils');
const soapDate = require('./soap.date');

let savePath = path.join(path.dirname(require.main.filename) ,'log', soapDate.yyyymmdd(8) + '.log');

module.exports.log = function(content){

    if(!fs.existsSync(savePath))
        soapUtils.CheckDirectoryExist(savePath);

    let formatContent = util.format(content);

    console.log(formatContent)

    fs.appendFileSync(savePath,formatContent + '\n');
}