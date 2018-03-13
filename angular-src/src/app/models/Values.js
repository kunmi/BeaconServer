"use strict";
var title = "Beacon Framework";
var year = "2017";
var copyright = "Olakunmi Joseph";
var BASE_URL = "http://localhost:3000/";
var Values = (function () {
    function Values() {
    }
    Values.prototype.getTitle = function () {
        return title;
    };
    Values.prototype.getYear = function () {
        return year;
    };
    Values.prototype.getCopyright = function () {
        return copyright;
    };
    Values.prototype.getServiceEndPoint = function () {
        return BASE_URL;
    };
    return Values;
}());
exports.Values = Values;
