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
    return omit(props, ['inHeader', 'columnKey', '_responsiveTable', 'breakPoint']);
};

var randomString = exports.randomString = function randomString() {
    return 'a' + Math.random().toString(36).substring(7);
};

var getCssString = exports.getCssString = function getCssString(className, breakPoint) {
    return '\n@media screen and (max-width: ' + breakPoint + 'px) {\n    table.r-responsive-table.' + className + ' {\n        border: 0;\n    }\n\n    table.r-responsive-table.' + className + ' thead {\n        border: none;\n        /* clip: rect(0 0 0 0); */\n        height: 1px;\n        margin: -1px;\n        overflow: hidden;\n        padding: 0;\n        position: absolute;\n        width: 1px;\n    }\n    table.r-responsive-table.' + className + ' tr {\n        border-bottom: 3px solid #ddd;\n        display: block;\n        margin-bottom: 0.625em;\n    }\n    table.r-responsive-table.' + className + ' td {\n        border-bottom: 1px solid #ddd;\n        display: block;\n        font-size: 0.8em;\n        text-align: right;\n    }\n    table.r-responsive-table.' + className + ' .tdBefore {\n        display: initial;\n        float: left;\n        font-weight: bold;\n        /* text-transform: uppercase; */\n    }\n    table.r-responsive-table.' + className + ' td:last-child {\n        border-bottom: 0;\n    }\n}\n';
};