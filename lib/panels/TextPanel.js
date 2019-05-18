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

var _webfontloader = _interopRequireDefault(require("webfontloader"));

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

var TextPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(TextPanel, _Component);

  function TextPanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "fontFamilies", [{
      name: 'Alegreya Sans',
      family: 'Alegreya Sans'
    }, {
      name: 'Alegreya',
      family: 'Alegreya'
    }, {
      name: 'American Typewriter',
      family: 'AmericanTypewriter, Georgia, serif'
    }, {
      name: 'Anonymous Pro',
      family: 'Anonymous Pro'
    }, {
      name: 'Archivo Narrow',
      family: 'Archivo Narrow'
    }, {
      name: 'Arvo',
      family: 'Arvo'
    }, {
      name: 'Bitter',
      family: 'Bitter'
    }, {
      name: 'Cardo',
      family: 'Cardo'
    }, {
      name: 'Chivo',
      family: 'Chivo'
    }, {
      name: 'Crimson Text',
      family: 'Crimson Text'
    }, {
      name: 'Domine',
      family: 'Domine'
    }, {
      name: 'Fira Sans',
      family: 'Fira Sans'
    }, {
      name: 'Georgia',
      family: 'Georgia, serif'
    }, {
      name: 'Helvetica Neue',
      family: '"Helvetica Neue", Arial, sans-serif'
    }, {
      name: 'Helvetica',
      family: 'Helvetica, Arial, sans-serif'
    }, {
      name: 'Inconsolata',
      family: 'Inconsolata'
    }, {
      name: 'Karla',
      family: 'Karla'
    }, {
      name: 'Lato',
      family: 'Lato'
    }, {
      name: 'Libre Baskerville',
      family: 'Libre Baskerville'
    }, {
      name: 'Lora',
      family: 'Lora'
    }, {
      name: 'Merriweather',
      family: 'Merriweather'
    }, {
      name: 'Monaco',
      family: 'Monaco, consolas, monospace'
    }, {
      name: 'Montserrat',
      family: 'Montserrat'
    }, {
      name: 'Neuton',
      family: 'Neuton'
    }, {
      name: 'Old Standard TT',
      family: 'Old Standard TT'
    }, {
      name: 'Open Sans',
      family: 'Open Sans'
    }, {
      name: 'PT Serif',
      family: 'PT Serif'
    }, {
      name: 'Playfair Display',
      family: 'Playfair Display'
    }, {
      name: 'Poppins',
      family: 'Poppins'
    }, {
      name: 'Roboto Slab',
      family: 'Roboto Slab'
    }, {
      name: 'Roboto',
      family: 'Roboto'
    }, {
      name: 'Source Pro',
      family: 'Source Pro'
    }, {
      name: 'Source Sans Pro',
      family: 'Source Sans Pro'
    }, {
      name: 'Varela Round',
      family: 'Varela Round'
    }, {
      name: 'Work Sans',
      family: 'Work Sans'
    }]);

    _defineProperty(_assertThisInitialized(_this), "handleFontFamilyChange", function (e) {
      var value = e.target.value;

      _webfontloader["default"].load({
        google: {
          families: [value]
        }
      });

      _this.props.onChange('fontFamily', value);
    });

    _defineProperty(_assertThisInitialized(_this), "sortFonts", function (f1, f2) {
      return f1.name.toLowerCase() > f2.name.toLowerCase() ? 1 : f1.name.toLowerCase() < f2.name.toLowerCase() ? -1 : 0;
    });

    return _this;
  }

  _createClass(TextPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var object = this.props.object;
      return _react["default"].createElement(_PropertyGroup["default"], {
        showIf: _lodash["default"].has(object, 'text')
      }, _react["default"].createElement("div", {
        style: _styles["default"].columns
      }, _react["default"].createElement(_Column["default"], {
        style: {
          "float": "right",
          "marginRight": 15
        }
      }, _lodash["default"].has(object, 'fontWeight') && _react["default"].createElement(_SwitchState["default"], {
        icon: "format-bold",
        defaultValue: 'normal',
        nextState: 'bold',
        value: object.fontWeight,
        onChange: this.props.onChange.bind(this, 'fontWeight')
      }), _lodash["default"].has(object, 'fontStyle') && _react["default"].createElement(_SwitchState["default"], {
        icon: "format-italic",
        defaultValue: 'normal',
        nextState: 'italic',
        value: object.fontStyle,
        onChange: this.props.onChange.bind(this, 'fontStyle')
      }), _lodash["default"].has(object, 'textDecoration') && _react["default"].createElement(_SwitchState["default"], {
        icon: "format-underline",
        defaultValue: 'none',
        nextState: 'underline',
        value: object.textDecoration,
        onChange: this.props.onChange.bind(this, 'textDecoration')
      })), _react["default"].createElement(_Column["default"], {
        style: {
          "float": "right"
        }
      }, _lodash["default"].has(object, 'fontSize') && _react["default"].createElement("input", {
        style: _objectSpread({}, _styles["default"].input, _styles["default"].integerInput, {
          width: 35
        }),
        value: object.fontSize,
        onChange: function onChange(e) {
          return _this2.props.onChange('fontSize', e.target.value);
        }
      })), _react["default"].createElement(_Column["default"], {
        style: {
          "float": "right",
          marginRight: 10
        }
      }, _react["default"].createElement("select", {
        style: _styles["default"].select,
        value: object.fontFamily,
        onChange: this.handleFontFamilyChange
      }, this.fontFamilies.sort(this.sortFonts).map(function (_ref) {
        var name = _ref.name,
            family = _ref.family;
        return _react["default"].createElement("option", {
          key: family,
          value: family
        }, name);
      }))), _react["default"].createElement("div", {
        style: _objectSpread({}, _styles["default"].row, {
          paddingTop: 25,
          paddingRight: 10
        })
      }, _react["default"].createElement("input", {
        style: _objectSpread({}, _styles["default"].input, _styles["default"].textInput),
        onChange: function onChange(e) {
          return _this2.props.onChange('text', e.target.value);
        },
        value: object.text
      }))));
    }
  }]);

  return TextPanel;
}(_react.Component);

exports["default"] = TextPanel;