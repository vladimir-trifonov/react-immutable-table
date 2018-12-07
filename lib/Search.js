"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SearchModule = _interopRequireDefault(require("./Search.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var onSearch = _ref.onSearch;
  return _react.default.createElement("div", {
    className: _SearchModule.default['search-wrapper']
  }, _react.default.createElement("input", {
    placeholder: "Search...",
    type: "text",
    onChange: function onChange(e) {
      return onSearch(e.target.value);
    },
    className: _SearchModule.default['search-field']
  }));
};

exports.default = _default;