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

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _superagent = _interopRequireDefault(require("superagent"));

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

var ImagePanel =
/*#__PURE__*/
function (_Component) {
  _inherits(ImagePanel, _Component);

  function ImagePanel() {
    _classCallCheck(this, ImagePanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImagePanel).apply(this, arguments));
  }

  _createClass(ImagePanel, [{
    key: "onDrop",
    value: function onDrop(acceptedFiles) {
      if (acceptedFiles.length == 0) {
        return;
      }

      var file = acceptedFiles[0];
      var fr = new FileReader();

      var setImage = function (e) {
        this.props.onChange('xlinkHref', e.target.result);
      }.bind(this);

      fr.onload = setImage;
      fr.readAsDataURL(file);
    }
  }, {
    key: "render",
    value: function render() {
      var object = this.props.object;
      return _react["default"].createElement(_PropertyGroup["default"], {
        object: object,
        showIf: _lodash["default"].has(object, 'xlinkHref')
      }, _react["default"].createElement(_Columns["default"], {
        label: "Image"
      }, _react["default"].createElement(_Column["default"], null, _react["default"].createElement(_reactDropzone["default"], {
        accept: "image/*",
        onDrop: this.onDrop.bind(this),
        multiple: false,
        style: {
          "float": 'left',
          marginRight: '3px',
          padding: '3px',
          border: '1px solid gray',
          color: 'gray',
          borderRadius: '3px',
          width: '100px',
          textAlign: 'center'
        },
        activeStyle: {
          border: '1px solid blue',
          backgroundColor: 'white',
          color: 'black'
        }
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps;
        return _react["default"].createElement("div", getRootProps(), _react["default"].createElement("input", getInputProps()), _react["default"].createElement("p", null, "Drop new file"));
      }))));
    }
  }]);

  return ImagePanel;
}(_react.Component);

exports["default"] = ImagePanel;