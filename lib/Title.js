"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TitleModule = _interopRequireDefault(require("./Title.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var title = _ref.title;
  return _react.default.createElement("div", {
    className: _TitleModule.default.title
  }, title);
};

exports.default = _default;