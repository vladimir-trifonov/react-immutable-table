"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _TableModule = _interopRequireDefault(require("./Table.module.css"));

var _Row = _interopRequireDefault(require("./Row"));

var _Header = _interopRequireDefault(require("./Header"));

var _Title = _interopRequireDefault(require("./Title"));

var _Search = _interopRequireDefault(require("./Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Table =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Table, _PureComponent);

  function Table() {
    var _this;

    _classCallCheck(this, Table);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getStyles = _this.getStyles.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Table, [{
    key: "handleClick",
    value: function handleClick(e) {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          columns = _this$props.columns;
      if (!onClick) return;
      var rowIndex = e.target.parentElement.rowIndex;
      var cellIndex = e.target.cellIndex;

      if (typeof rowIndex !== 'undefined' && typeof cellIndex !== 'undefined') {
        onClick(!!columns ? rowIndex - 1 : rowIndex, cellIndex);
      }
    }
  }, {
    key: "getStyles",
    value: function getStyles(styles, defaultStyle) {
      var theme = this.props.theme;
      return !!theme && ['dark1'].includes(theme) && !!styles["".concat(defaultStyle, "-").concat(theme)] ? [styles[defaultStyle], styles["".concat(defaultStyle, "-").concat(theme)]].join(' ') : styles[defaultStyle];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          items = _this$props2.items,
          columns = _this$props2.columns,
          title = _this$props2.title,
          count = _this$props2.count,
          renderControls = _this$props2.renderControls,
          onSearch = _this$props2.onSearch;
      return _react.default.createElement("div", {
        className: this.getStyles(_TableModule.default, 'table')
      }, title && _react.default.createElement(_Title.default, {
        getStyles: this.getStyles,
        title: title,
        renderControls: renderControls
      }), onSearch && _react.default.createElement(_Search.default, {
        getStyles: this.getStyles,
        onSearch: onSearch
      }), _react.default.createElement("table", null, columns && _react.default.createElement(_Header.default, {
        getStyles: this.getStyles,
        columns: columns
      }), !!count && _react.default.createElement("tbody", {
        onClick: this.handleClick
      }, items.map(function (item, i) {
        return _react.default.createElement(_Row.default, {
          getStyles: _this2.getStyles,
          key: i,
          item: item
        });
      }))));
    }
  }]);

  return Table;
}(_react.PureComponent);

exports.default = Table;