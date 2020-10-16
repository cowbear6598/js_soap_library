'use strict';

const fs = require('fs');
const util = require('util');
const path = require('path');
const soapUtils = require('../js_soap_library/soap.utils');

let savePath = path.join(__dirname ,'/log/server.log');

module.exports.Log = function(content){

    if(!fs.existsSync(savePath))
        soapUtils.CheckDirectoryExist(savePath);

    let formatContent = util.format(content);

    console.log(formatContent)

    fs.appendFileSync(savePath,formatContent + '\n');
}