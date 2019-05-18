"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactColor = require("react-color");

var _lodash = _interopRequireDefault(require("lodash"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ColorInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ColorInput, _Component);

  function ColorInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ColorInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ColorInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      show: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleVisibility", function (event) {
      if (event.preventDefault) {
        event.preventDefault();
      }

      var show = _this.state.show;

      _this.setState({
        show: !show
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (color) {
      var _color$rgb = color.rgb,
          r = _color$rgb.r,
          g = _color$rgb.g,
          b = _color$rgb.b,
          a = _color$rgb.a;

      _this.props.onChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"));
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (event) {
      if (event.preventDefault) {
        event.preventDefault();
      }

      _this.setState({
        show: false
      });
    });

    return _this;
  }

  _createClass(ColorInput, [{
    key: "render",
    value: function render() {
      var show = this.state.show;
      var value = this.props.value;
      return _react["default"].createElement("div", null, _react["default"].createElement("a", {
        href: "#",
        style: _styles["default"].colorInput,
        onClick: this.toggleVisibility.bind(this)
      }, _react["default"].createElement("span", {
        style: _objectSpread({}, _styles["default"].color, {
          backgroundColor: value
        })
      })), show && _react["default"].createElement("div", {
        style: _styles["default"].colorPopover
      }, _react["default"].createElement("div", {
        style: _styles["default"].colorCover,
        onClick: this.handleClose
      }), _react["default"].createElement(_reactColor.SketchPicker, {
        color: value,
        onChange: this.handleChange
      })));
    }
  }]);

  return ColorInput;
}(_react.Component);

var _default = ColorInput;
exports["default"] = _default;