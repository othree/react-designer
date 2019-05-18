"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _styles = _interopRequireDefault(require("./styles"));

var _PropertyGroup = _interopRequireDefault(require("./PropertyGroup"));

var _Button = _interopRequireDefault(require("./Button"));

var _SwitchState = _interopRequireDefault(require("./SwitchState"));

var _Columns = _interopRequireDefault(require("./Columns"));

var _Column = _interopRequireDefault(require("./Column"));

var _ColorInput = _interopRequireDefault(require("./ColorInput"));

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

var StylePanel =
/*#__PURE__*/
function (_Component) {
  _inherits(StylePanel, _Component);

  function StylePanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StylePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StylePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "modes", ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']);

    return _this;
  }

  _createClass(StylePanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var object = this.props.object;
      return _react["default"].createElement(_PropertyGroup["default"], null, _react["default"].createElement(_Columns["default"], {
        label: "Fill",
        showIf: _lodash["default"].has(object, 'fill')
      }, _react["default"].createElement(_Column["default"], null, _react["default"].createElement(_ColorInput["default"], {
        value: object.fill,
        onChange: this.props.onChange.bind(this, 'fill')
      }))), _react["default"].createElement(_Columns["default"], {
        label: "Stroke",
        showIf: _lodash["default"].has(object, 'stroke')
      }, _react["default"].createElement(_Column["default"], null, _react["default"].createElement(_ColorInput["default"], {
        value: object.stroke,
        onChange: this.props.onChange.bind(this, 'stroke')
      })), _react["default"].createElement(_Column["default"], {
        label: "width"
      }, _react["default"].createElement("input", {
        style: _objectSpread({}, _styles["default"].input, _styles["default"].integerInput, {
          width: 30
        }),
        onChange: function onChange(e) {
          return _this2.props.onChange('strokeWidth', e.target.value);
        },
        value: object.strokeWidth
      })), _react["default"].createElement(_Column["default"], {
        showIf: _lodash["default"].has(object, 'radius'),
        label: "radius"
      }, _react["default"].createElement("input", {
        style: _objectSpread({}, _styles["default"].input, _styles["default"].integerInput, {
          width: 30
        }),
        onChange: function onChange(e) {
          return _this2.props.onChange('radius', e.target.value);
        },
        value: object.radius
      }))), _react["default"].createElement(_Columns["default"], {
        label: "Blending"
      }, _react["default"].createElement(_Column["default"], null, _react["default"].createElement("select", {
        style: _styles["default"].select,
        value: object.blendMode,
        onChange: function onChange(e) {
          return _this2.props.onChange('blendMode', e.target.value);
        }
      }, this.modes.map(function (mode) {
        return _react["default"].createElement("option", {
          key: mode,
          value: mode
        }, mode);
      })))));
    }
  }]);

  return StylePanel;
}(_react.Component);

exports["default"] = StylePanel;