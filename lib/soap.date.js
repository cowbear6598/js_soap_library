'use strict';

/**
 * 取得對應時區的 Unix Time 不包含毫秒
 * @param timezone 輸入需要調整多少時區，預設為 0
 * @returns {number}
 */
module.exports.unixTime = function (timezone = 0) {
    return Math.floor((new Date().getTime() + (timezone * 3600 * 1000)) / 1000)
};

/**
 * 取得對應時區的 Unix Time 包含毫秒
 * @param timezone 輸入需要調整多少時區，預設為 0
 * @returns {number}
 */

module.exports.unixTimeMillisecond = function (timezone = 0) {
    return Math.floor((new Date().getTime() + (timezone * 3600 * 1000)))
};

/**
 * 取得當地時間的 ISO
 * @param timezone 預設為 0 時區
 * @returns {Date}
 */
module.exports.toIsoStringTimeZone = function(timezone = 0){

    return new Date(new Date().unixTime(timezone) * 1000);
}

/**
 * 取得 yyyy-mm-dd 格式的日期
 * @param timezone 預設為 0 時區
 * @returns {string}
 */
module.exports.yyyymmdd = function (timezone = 0) {

    const date = new Date(new Date().unixTime(timezone) * 1000);

    const yyyy = date.getUTCFullYear();
    const mm = date.getUTCMonth() + 1;
    const dd = date.getUTCDate();

    return yyyy + "-" +
        ((mm < 10) ? "0" : "" ) + mm + "-" +
        ((dd < 10) ? "0" : "" ) + dd;
}

/**
 * 取得 yyyy-mm-dd hh-mm-ss 格式的日期
 * @param timezone 預設為 0 時區
 * @returns {string}
 */
module.exports.yyyymmddhhmmss = function (timezone = 0) {

    const date = new Date(new Date().unixTime(timezone) * 1000);

    const yyyy = date.getUTCFullYear();
    const mm = date.getUTCMonth() + 1;
    const dd = date.getUTCDate();
    const hh = date.getUTCHours();
    const mi = date.getUTCMinutes();
    const ss = date.getUTCSeconds();

    return yyyy + "-" +
        ((mm < 10) ? "0" : "" ) + mm + "-" +
        ((dd < 10) ? "0" : "" ) + dd + " " +
        ((hh < 10) ? "0" : "" ) + hh + ":" +
        ((mi < 10) ? "0" : "" ) + mi + ":" +
        ((ss < 10) ? "0" : "" ) + ss;
}

/**
 * 比對 yyyymmdd 格式是否為今天
 * @param otherDate
 * @returns {boolean}
 */
module.exports.yyyymmddIsToday = function (otherDate) {
    const todayDate = new Date(new Date().yyyymmdd(8));
    const compareUnixTime = new Date(otherDate);
    const compareDate = new Date(Date.UTC(compareUnixTime.getFullYear(),compareUnixTime.getMonth(),compareUnixTime.getDate(),
        compareUnixTime.getHours(),compareUnixTime.getMinutes(),compareUnixTime.getSeconds()))

    return todayDate.getFullYear() === compareDate.getFullYear()
        && todayDate.getMonth() === compareDate.getMonth()
        && todayDate.getDate() === compareDate.getDate();
}