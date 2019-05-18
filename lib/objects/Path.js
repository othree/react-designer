"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../constants");

var _Icon = _interopRequireDefault(require("../Icon"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Vector2 = _interopRequireDefault(require("./Vector"));

var _BezierEditor = _interopRequireDefault(require("../editors/BezierEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Path =
/*#__PURE__*/
function (_Vector) {
  _inherits(Path, _Vector);

  function Path() {
    _classCallCheck(this, Path);

    return _possibleConstructorReturn(this, _getPrototypeOf(Path).apply(this, arguments));
  }

  _createClass(Path, [{
    key: "buildPath",
    value: function buildPath(object) {
      var path = object.path;
      var curves = path.map(function (_ref, i) {
        var x1 = _ref.x1,
            y1 = _ref.y1,
            x2 = _ref.x2,
            y2 = _ref.y2,
            x = _ref.x,
            y = _ref.y;
        return "C ".concat(x1, " ").concat(y1, ", ").concat(x2, " ").concat(y2, ", ").concat(x, " ").concat(y);
      });
      var instructions = ["M ".concat(object.moveX, " ").concat(object.moveY)].concat(_toConsumableArray(curves));

      if (object.closed) {
        instructions = [].concat(_toConsumableArray(instructions), ['Z']);
      }

      return instructions.join('\n');
    }
  }, {
    key: "getTransformMatrix",
    value: function getTransformMatrix(_ref2) {
      var rotate = _ref2.rotate,
          x = _ref2.x,
          y = _ref2.y,
          moveX = _ref2.moveX,
          moveY = _ref2.moveY;
      return "\n      translate(".concat(x - moveX, " ").concat(y - moveY, ")\n      rotate(").concat(rotate, " ").concat(x, " ").concat(y, ")\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      var object = this.props.object;
      var fill = object.closed ? object.fill : "transparent";
      return _react["default"].createElement("path", _extends({
        style: this.getStyle(object)
      }, this.getObjectAttributes(), {
        d: this.buildPath(object),
        fill: fill
      }));
    }
  }]);

  return Path;
}(_Vector2["default"]);

exports["default"] = Path;

_defineProperty(Path, "meta", {
  initial: {
    fill: "#e3e3e3",
    closed: false,
    rotate: 0,
    moveX: 0,
    moveY: 0,
    path: [],
    stroke: "gray",
    strokeWidth: 1
  },
  mode: _constants.modes.DRAW_PATH,
  icon: _react["default"].createElement(_Icon["default"], {
    icon: 'polygon',
    size: 30
  }),
  editor: _BezierEditor["default"]
});