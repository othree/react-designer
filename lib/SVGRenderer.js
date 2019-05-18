"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = void 0;

var _react = _interopRequireWildcard(require("react"));

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

var SVGRenderer =
/*#__PURE__*/
function (_Component) {
  _inherits(SVGRenderer, _Component);

  function SVGRenderer() {
    _classCallCheck(this, SVGRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SVGRenderer).apply(this, arguments));
  }

  _createClass(SVGRenderer, [{
    key: "getObjectComponent",
    value: function getObjectComponent(type) {
      var objectTypes = this.props.objectTypes;
      return objectTypes[type];
    }
  }, {
    key: "renderObject",
    value: function renderObject(object, index) {
      var _this$props = this.props,
          objectRefs = _this$props.objectRefs,
          onMouseOver = _this$props.onMouseOver;
      var Renderer = this.getObjectComponent(object.type);
      return _react["default"].createElement(Renderer, {
        onRender: function onRender(ref) {
          return objectRefs[index] = ref;
        },
        onMouseOver: onMouseOver.bind(this, index),
        object: object,
        key: index,
        index: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          background = _this$props2.background,
          objects = _this$props2.objects,
          svgStyle = _this$props2.svgStyle,
          canvas = _this$props2.canvas,
          onMouseDown = _this$props2.onMouseDown,
          onRender = _this$props2.onRender;
      var width = canvas.width,
          height = canvas.height,
          canvasOffsetX = canvas.canvasOffsetX,
          canvasOffsetY = canvas.canvasOffsetY;

      var style = _objectSpread({}, styles.canvas, background ? {
        backgroundColor: background
      } : styles.grid, _objectSpread({}, svgStyle, {
        marginTop: canvasOffsetY,
        marginLeft: canvasOffsetX
      }));

      return _react["default"].createElement("svg", {
        onMouseDown: onMouseDown,
        ref: onRender,
        width: width,
        height: height,
        style: style,
        isRoot: true
      }, objects.map(this.renderObject.bind(this)));
    }
  }]);

  return SVGRenderer;
}(_react.Component);

_defineProperty(SVGRenderer, "defaultProps", {
  onMouseOver: function onMouseOver() {}
});

var styles = {
  canvas: {
    backgroundSize: 400
  },
  grid: {
    backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5' + 'vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0' + 'PSIyMCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9I' + 'iNGN0Y3RjciPjwvcmVjdD4KPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIG' + 'ZpbGw9IiNGN0Y3RjciPjwvcmVjdD4KPC9zdmc+)',
    backgroundSize: "auto"
  }
};
exports.styles = styles;
var _default = SVGRenderer;
exports["default"] = _default;