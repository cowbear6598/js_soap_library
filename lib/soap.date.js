'use strict';

function unixTime(timezone = 0) {
    return Math.floor((new Date().getTime() + (timezone * 3600 * 1000)) / 1000)
}
module.exports.unixTime = unixTime;

module.exports.unixTimeMillisecond = function (timezone = 0) {
    return Math.floor((new Date().getTime() + (timezone * 3600 * 1000)))
};

module.exports.toIsoStringTimeZone = function(timezone = 0){
    return new Date(unixTime(timezone) * 1000);
}

function yyyymmdd(timezone = 0) {

    const date = new Date(unixTime(timezone) * 1000);

    const yyyy = date.getUTCFullYear();
    const mm = date.getUTCMonth() + 1;
    const dd = date.getUTCDate();

    return yyyy + "-" +
        ((mm < 10) ? "0" : "" ) + mm + "-" +
        ((dd < 10) ? "0" : "" ) + dd;
}
module.exports.yyyymmdd = yyyymmdd;

module.exports.yyyymmddhhmmss = function (timezone = 0) {

    const date = new Date(unixTime(timezone) * 1000);

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

module.exports.yyyymmddIsToday = function (otherDate) {
    const todayDate = new Date(yyyymmdd(8));
    const compareUnixTime = new Date(otherDate);
    const compareDate = new Date(Date.UTC(compareUnixTime.getFullYear(),compareUnixTime.getMonth(),compareUnixTime.getDate(),
        compareUnixTime.getHours(),compareUnixTime.getMinutes(),compareUnixTime.getSeconds()))

    return todayDate.getFullYear() === compareDate.getFullYear()
        && todayDate.getMonth() === compareDate.getMonth()
        && todayDate.getDate() === compareDate.getDate();
}