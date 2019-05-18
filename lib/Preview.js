"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _SVGRenderer = _interopRequireDefault(require("./SVGRenderer"));

var _objects = require("./objects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Preview =
/*#__PURE__*/
function (_Component) {
  _inherits(Preview, _Component);

  function Preview() {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, _getPrototypeOf(Preview).apply(this, arguments));
  }

  _createClass(Preview, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.objectRefs = {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          objects = _this$props.objects,
          objectTypes = _this$props.objectTypes,
          _this$props$responsiv = _this$props.responsive,
          responsive = _this$props$responsiv === void 0 ? false : _this$props$responsiv;

      var style = _objectSpread({}, styles.container, this.props.style, {
        width: responsive ? '100%' : width,
        height: responsive ? '100%' : height,
        padding: 0
      });

      var canvas = {
        width: responsive ? '100%' : width,
        height: responsive ? '100%' : height,
        canvasWidth: responsive ? '100%' : width,
        canvasHeight: responsive ? '100%' : height
      };

      if (responsive) {
        objects = objects.map(function (object) {
          return _objectSpread({}, object, {
            width: object.width / width * 100 + '%',
            height: object.height / height * 100 + '%',
            x: object.x / width * 100 + '%',
            y: object.y / height * 100 + '%'
          });
        });
      }

      return _react["default"].createElement("div", {
        className: 'container',
        style: style
      }, _react["default"].createElement(_SVGRenderer["default"], {
        width: width,
        height: height,
        objects: objects,
        objectRefs: this.objectRefs,
        objectTypes: objectTypes,
        onRender: function onRender(ref) {
          return _this.svgElement = ref;
        },
        canvas: canvas
      }));
    }
  }]);

  return Preview;
}(_react.Component);

_defineProperty(Preview, "defaultProps", {
  objectTypes: {
    'text': _objects.Text,
    'rectangle': _objects.Rect,
    'circle': _objects.Circle,
    'polygon': _objects.Path,
    'image': _objects.Image
  }
});

var styles = {
  container: {
    position: "relative"
  }
};
var _default = Preview;
exports["default"] = _default;