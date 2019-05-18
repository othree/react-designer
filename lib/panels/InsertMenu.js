"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

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

var InsertMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(InsertMenu, _Component);

  function InsertMenu(props) {
    var _this;

    _classCallCheck(this, InsertMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InsertMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "openMenu", function () {
      _this.setState({
        menuOpened: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      _this.setState({
        menuOpened: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hoverTool", function (type) {
      _this.setState({
        hoveredTool: type
      });
    });

    _defineProperty(_assertThisInitialized(_this), "unhoverTool", function (type) {
      if (_this.state.hoveredTool == type) {
        _this.setState({
          hoveredTool: null
        });
      }
    });

    _this.state = {
      menuOpened: false,
      hoveredTool: null
    };
    return _this;
  }

  _createClass(InsertMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          currentTool = _this$props.currentTool,
          tools = _this$props.tools;
      var _this$state = this.state,
          menuOpened = _this$state.menuOpened,
          hoveredTool = _this$state.hoveredTool;
      var keys = Object.keys(tools);
      return _react["default"].createElement("div", {
        style: _objectSpread({}, styles.insertMenu, menuOpened ? styles.insertMenuHover : {}),
        onMouseOver: this.openMenu,
        onMouseOut: this.closeMenu
      }, _react["default"].createElement("div", {
        style: styles.mainIcon
      }, currentTool ? tools[currentTool].meta.icon : _react["default"].createElement(_Icon["default"], {
        icon: "add",
        size: 30
      })), _react["default"].createElement("ul", {
        style: styles.toolBox
      }, keys.map(function (type, i) {
        return _react["default"].createElement("li", {
          style: _objectSpread({}, styles.toolBoxItem, currentTool === type ? styles.currentToolboxItem : {}, hoveredTool === type ? styles.currentToolboxItem : {}),
          onMouseOver: function onMouseOver() {
            return _this2.hoverTool(type);
          },
          onMouseOut: function onMouseOut() {
            return _this2.unhoverTool(type);
          },
          onMouseDown: _this2.props.onSelect.bind(_this2, type),
          key: i
        }, tools[type].meta.icon);
      })));
    }
  }]);

  return InsertMenu;
}(_react.Component);

var styles = {
  insertMenu: {
    height: 40,
    width: 40,
    overflow: 'hidden'
  },
  insertMenuHover: {
    background: '#eeeff5',
    height: 'auto'
  },
  toolBox: {
    margin: 0,
    padding: 0
  },
  toolBoxItem: {
    listStyle: "none",
    padding: "5px 5px"
  },
  currentToolboxItem: {
    background: "#ebebeb"
  },
  mainIcon: {
    padding: "10px 5px",
    borderBottom: "1px solid #e0e0e0"
  }
};
var _default = InsertMenu;
exports["default"] = _default;