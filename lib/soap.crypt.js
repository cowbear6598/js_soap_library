'use strict';

const {
    generateKeyPairSync,
    publicEncrypt,
    privateDecrypt
} = require('crypto');
const fs = require('fs');
const path = require('path');
const soapLog = require('./soap.log');
const soapUtils = require('./soap.utils');

/*
   產生公鑰、私鑰，不需給予副檔名
 */
module.exports.RsaCreateKeyPair = function (name, length = 4096) {
    if(!fs.existsSync(name))
        soapUtils.CheckDirectoryExist(name);

    const keyPair = generateKeyPairSync('rsa', {
        modulusLength: length,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    });

    try {
        fs.writeFileSync(path.join(name + '.pub'),keyPair.publicKey);
    }
    catch (e) {
        soapLog.log(e.message);
        return null;
    }

    try {
        fs.writeFileSync(path.join(name + '.pem'),keyPair.privateKey);
    }
    catch (e) {
        soapLog.log(e.message);
        return null;
    }

    return keyPair;
}

module.exports.RsaEncrypt = function (publicKey, content) {
    return publicEncrypt(publicKey, new Buffer.from(content));
}

module.exports.RsaDecrypt = function (privateKey,content){
    const pemKey = fs.readFileSync(privateKey,"utf8");

    return privateDecrypt(pemKey,content);
}