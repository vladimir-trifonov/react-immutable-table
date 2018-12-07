"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeaderModule = _interopRequireDefault(require("./Header.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var columns = _ref.columns;
  return _react.default.createElement("thead", null, _react.default.createElement("tr", null, columns && columns.map(function (data, i) {
    return _react.default.createElement("th", {
      key: i,
      className: _HeaderModule.default.col
    }, data);
  })));
};

exports.default = _default;