'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var omit = exports.omit = function omit(obj, omitProps) {
    return Object.keys(obj).filter(function (key) {
        return omitProps.indexOf(key) === -1;
    }).reduce(function (returnObj, key) {
        return _extends({}, returnObj, _defineProperty({}, key, obj[key]));
    }, {});
};

var allowed = exports.allowed = function allowed(props) {
    return omit(props, ['inHeader', 'columnKey', '_responsiveTable']);
};