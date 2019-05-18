"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ScaleAnchor(props) {
  var boundingBox = props.boundingBox;
  var style = {
    marginTop: boundingBox.height + 5,
    marginLeft: boundingBox.width + 5
  };

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      anchorHovered = _useState2[0],
      setAnchorHovered = _useState2[1];

  return _react["default"].createElement("div", {
    style: _objectSpread({}, styles.anchor, anchorHovered ? styles.anchorHovered : {}, styles.scaleAnchor, style),
    className: 'resize-anchor',
    onMouseOver: function onMouseOver() {
      return setAnchorHovered(true);
    },
    onMouseOut: function onMouseOut() {
      return setAnchorHovered(false);
    },
    onMouseDown: props.onMouseDown
  });
}

;

function RotateAnchor(props) {
  var style = {
    marginLeft: props.boundingBox.width + 5
  };

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      anchorHovered = _useState4[0],
      setAnchorHovered = _useState4[1];

  return _react["default"].createElement("div", {
    style: _objectSpread({}, styles.anchor, anchorHovered ? styles.anchorHovered : {}, styles.rotateAnchor, style),
    className: 'rotate-anchor',
    onMouseOver: function onMouseOver() {
      return setAnchorHovered(true);
    },
    onMouseOut: function onMouseOut() {
      return setAnchorHovered(false);
    },
    onMouseDown: props.onMouseDown
  });
}

;

var Handler =
/*#__PURE__*/
function (_Component) {
  _inherits(Handler, _Component);

  function Handler() {
    _classCallCheck(this, Handler);

    return _possibleConstructorReturn(this, _getPrototypeOf(Handler).apply(this, arguments));
  }

  _createClass(Handler, [{
    key: "onMouseDown",
    value: function onMouseDown(event) {
      // event.preventDefault();
      if (event.target.classList.contains('handler')) {
        this.props.onDrag(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var boundingBox = props.boundingBox;

      var handlerStyle = _objectSpread({}, styles.handler, boundingBox, {
        width: boundingBox.width + 10,
        height: boundingBox.height + 10,
        left: boundingBox.left - 5,
        top: boundingBox.top - 5,
        transform: "rotate(".concat(boundingBox.rotate, "deg)")
      });

      return _react["default"].createElement("div", {
        className: 'handler',
        style: handlerStyle,
        onMouseLeave: props.onMouseLeave,
        onDoubleClick: props.onDoubleClick,
        onMouseDown: this.onMouseDown.bind(this)
      }, props.canResize && _react["default"].createElement(ScaleAnchor, {
        onMouseDown: props.onResize,
        boundingBox: boundingBox
      }));
    }
  }]);

  return Handler;
}(_react.Component);

var styles = {
  handler: {
    'position': 'absolute',
    'border': '2px solid #dedede',
    'zIndex': 999999
  },
  anchor: {
    'width': 10,
    'height': 10
  },
  anchorHovered: {
    'borderColor': 'gray'
  },
  scaleAnchor: {
    'marginTop': -3,
    'borderRight': '2px solid #dedede',
    'borderBottom': '2px solid #dedede',
    'position': 'absolute',
    'zIndex': -1
  },
  rotateAnchor: {
    'marginTop': -8,
    'borderRight': '2px solid #dedede',
    'borderTop': '2px solid #dedede',
    'position': 'absolute',
    'borderTopRightRadius': 3,
    'zIndex': -1
  }
};
var _default = Handler;
exports["default"] = _default;