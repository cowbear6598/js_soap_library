/**
 * 取得對應時區的 Unix Time 不包含毫秒
 * @param timezone 輸入需要調整多少時區，預設為 0
 * @returns {number}
 */
Date.prototype.unixTime = function (timezone = 0) {
    return Math.floor((Date.now() + (timezone * 3600 * 1000)) / 1000)
};

/**
 * 取得 yyyy-mm-dd 格式的日期
 * @param utcTime 預設為 0 時區的 Unix Time
 * @returns {string}
 */
Date.prototype.yyyymmdd = function (utcTime = new Date().unixTime()) {

    const date = new Date(utcTime * 1000);

    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    return yyyy + "-" +
        ((mm < 10) ? "0" : "" ) + mm + "-" +
        ((dd < 10) ? "0" : "" ) + dd;
}
