'use strict';

const fs = require('fs');
const path = require('path');

function CheckDirectoryExist(filePath){
    let dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    CheckDirectoryExist(dirname);

    fs.mkdirSync(dirname);
};

module.exports.CheckDirectoryExist = CheckDirectoryExist;

