"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TitleModule = _interopRequireDefault(require("./Title.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var title = _ref.title,
      renderControls = _ref.renderControls;
  return _react.default.createElement("div", {
    className: _TitleModule.default['title-wrapper']
  }, _react.default.createElement("span", {
    className: _TitleModule.default.title
  }, title), renderControls && _react.default.createElement("span", {
    className: _TitleModule.default.controls
  }, renderControls()));
};

exports.default = _default;