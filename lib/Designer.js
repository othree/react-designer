"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.styles = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactHotkeys = require("react-hotkeys");

var _Icon = _interopRequireDefault(require("./Icon"));

var _InsertMenu = _interopRequireDefault(require("./panels/InsertMenu"));

var _SVGRenderer = _interopRequireDefault(require("./SVGRenderer"));

var _Handler = _interopRequireDefault(require("./Handler"));

var _constants = require("./constants");

var actions = _interopRequireWildcard(require("./actions"));

var _objects = require("./objects");

var _PanelList = _interopRequireDefault(require("./panels/PanelList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var Designer =
/*#__PURE__*/
function (_Component) {
  _inherits(Designer, _Component);

  function Designer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Designer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Designer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      mode: _constants.modes.FREE,
      handler: {
        top: 200,
        left: 200,
        width: 50,
        height: 50,
        rotate: 0
      },
      currentObjectIndex: null,
      selectedObjectIndex: null,
      selectedTool: null
    });

    _defineProperty(_assertThisInitialized(_this), "keyMap", {
      'removeObject': ['del', 'backspace'],
      'moveLeft': ['left', 'shift+left'],
      'moveRight': ['right', 'shift+right'],
      'moveUp': ['up', 'shift+up'],
      'moveDown': ['down', 'shift+down'],
      'closePath': ['enter']
    });

    return _this;
  }

  _createClass(Designer, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.objectRefs = {};
    }
  }, {
    key: "showHandler",
    value: function showHandler(index) {
      var mode = this.state.mode;
      var objects = this.props.objects;
      var object = objects[index];

      if (mode !== _constants.modes.FREE) {
        return;
      }

      this.updateHandler(index, object);
      this.setState({
        currentObjectIndex: index,
        showHandler: true
      });
    }
  }, {
    key: "hideHandler",
    value: function hideHandler() {
      var mode = this.state.mode;

      if (mode === _constants.modes.FREE) {
        this.setState({
          showHandler: false
        });
      }
    }
  }, {
    key: "getStartPointBundle",
    value: function getStartPointBundle(event, object) {
      var currentObjectIndex = this.state.currentObjectIndex;
      var objects = this.props.objects;
      var mouse = this.getMouseCoords(event);
      object = object || objects[currentObjectIndex];
      return {
        clientX: mouse.x,
        clientY: mouse.y,
        objectX: object.x,
        objectY: object.y,
        width: object.width,
        height: object.height,
        rotate: object.rotate
      };
    }
  }, {
    key: "startDrag",
    value: function startDrag(mode, event) {
      var currentObjectIndex = this.state.currentObjectIndex;
      this.setState({
        mode: mode,
        startPoint: this.getStartPointBundle(event),
        selectedObjectIndex: currentObjectIndex
      });
    }
  }, {
    key: "resetSelection",
    value: function resetSelection() {
      this.setState({
        selectedObjectIndex: null
      });
    }
  }, {
    key: "generateUUID",
    value: function generateUUID() {
      var d = new Date().getTime();

      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
      }

      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
      return uuid;
    }
  }, {
    key: "newObject",
    value: function newObject(event) {
      var _this$state = this.state,
          mode = _this$state.mode,
          selectedTool = _this$state.selectedTool;
      this.resetSelection(event);

      if (mode !== _constants.modes.DRAW) {
        return;
      }

      var _this$getObjectCompon = this.getObjectComponent(selectedTool),
          meta = _this$getObjectCompon.meta;

      var mouse = this.getMouseCoords(event);
      var _this$props = this.props,
          objects = _this$props.objects,
          onUpdate = _this$props.onUpdate;

      var object = _objectSpread({}, meta.initial, {
        type: selectedTool,
        x: mouse.x,
        y: mouse.y,
        uuid: this.generateUUID()
      });

      onUpdate([].concat(_toConsumableArray(objects), [object]));
      this.setState({
        currentObjectIndex: objects.length,
        selectedObjectIndex: objects.length,
        startPoint: this.getStartPointBundle(event, object),
        mode: meta.editor ? _constants.modes.EDIT_OBJECT : _constants.modes.SCALE,
        selectedTool: null
      });
    }
  }, {
    key: "updatePath",
    value: function updatePath(object) {
      var path = object.path;
      var diffX = object.x - object.moveX;
      var diffY = object.y - object.moveY;
      var newPath = path.map(function (_ref) {
        var x1 = _ref.x1,
            y1 = _ref.y1,
            x2 = _ref.x2,
            y2 = _ref.y2,
            x = _ref.x,
            y = _ref.y;
        return {
          x1: diffX + x1,
          y1: diffY + y1,
          x2: diffX + x2,
          y2: diffY + y2,
          x: diffX + x,
          y: diffY + y
        };
      });
      return _objectSpread({}, object, {
        path: newPath,
        moveX: object.x,
        moveY: object.y
      });
    }
  }, {
    key: "updateObject",
    value: function updateObject(objectIndex, changes, updatePath) {
      var _this2 = this;

      var _this$props2 = this.props,
          objects = _this$props2.objects,
          onUpdate = _this$props2.onUpdate;
      onUpdate(objects.map(function (object, index) {
        if (index === objectIndex) {
          var newObject = _objectSpread({}, object, changes);

          return updatePath ? _this2.updatePath(newObject) : newObject;
        } else {
          // console.log("ID=> ", object.uuid, "CHANGES :", JSON.stringify(changes))
          return object;
        }
      }));
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var parent = this.svgElement.getBoundingClientRect();

      var _this$getCanvas = this.getCanvas(),
          canvasWidth = _this$getCanvas.canvasWidth,
          canvasHeight = _this$getCanvas.canvasHeight;

      return {
        x: parent.left,
        y: parent.top,
        width: canvasWidth,
        height: canvasHeight
      };
    }
  }, {
    key: "applyOffset",
    value: function applyOffset(bundle) {
      var offset = this.getOffset();
      return _objectSpread({}, bundle, {
        x: bundle.x - offset.x,
        y: bundle.y - offset.y
      });
    }
  }, {
    key: "updateHandler",
    value: function updateHandler(index, object) {
      var target = this.objectRefs[index];
      var bbox = target.getBoundingClientRect();

      var _this$getCanvas2 = this.getCanvas(),
          canvasOffsetX = _this$getCanvas2.canvasOffsetX,
          canvasOffsetY = _this$getCanvas2.canvasOffsetY;

      var handler = _objectSpread({}, this.state.handler, {
        width: object.width || bbox.width,
        height: object.height || bbox.height,
        top: object.y + canvasOffsetY,
        left: object.x + canvasOffsetX,
        rotate: object.rotate
      });

      if (!object.width) {
        var offset = this.getOffset();
        handler = _objectSpread({}, handler, {
          left: bbox.left - offset.x,
          top: bbox.top - offset.y
        });
      }

      this.setState({
        handler: handler
      });
    }
  }, {
    key: "snapCoordinates",
    value: function snapCoordinates(_ref2) {
      var x = _ref2.x,
          y = _ref2.y;
      var snapToGrid = this.props.snapToGrid;
      return {
        x: x - x % snapToGrid,
        y: y - y % snapToGrid
      };
    }
  }, {
    key: "getMouseCoords",
    value: function getMouseCoords(_ref3) {
      var clientX = _ref3.clientX,
          clientY = _ref3.clientY;
      var coords = this.applyOffset({
        x: clientX,
        y: clientY
      });
      return this.snapCoordinates(coords);
    }
  }, {
    key: "onDrag",
    value: function onDrag(event) {
      var _map;

      var _this$state2 = this.state,
          currentObjectIndex = _this$state2.currentObjectIndex,
          startPoint = _this$state2.startPoint,
          mode = _this$state2.mode;
      var objects = this.props.objects;
      var object = objects[currentObjectIndex];
      var mouse = this.getMouseCoords(event);
      var scale = actions.scale,
          rotate = actions.rotate,
          drag = actions.drag;
      var map = (_map = {}, _defineProperty(_map, _constants.modes.SCALE, scale), _defineProperty(_map, _constants.modes.ROTATE, rotate), _defineProperty(_map, _constants.modes.DRAG, drag), _map);
      var action = map[mode];

      if (action) {
        var newObject = action({
          object: object,
          startPoint: startPoint,
          mouse: mouse,
          objectIndex: currentObjectIndex,
          objectRefs: this.objectRefs
        });
        this.updateObject(currentObjectIndex, newObject);
        this.updateHandler(currentObjectIndex, newObject);
      }

      if (currentObjectIndex !== null) {
        this.detectOverlappedObjects(event);
      }
    }
  }, {
    key: "detectOverlappedObjects",
    value: function detectOverlappedObjects(event) {
      var _this3 = this;

      var currentObjectIndex = this.state.currentObjectIndex;
      var objects = this.props.objects;
      var mouse = this.getMouseCoords(event);
      var refs = this.objectRefs,
          keys = Object.keys(refs),
          offset = this.getOffset();
      var currentRect = refs[currentObjectIndex].getBoundingClientRect();
      keys.filter(function (object, index) {
        return index !== currentObjectIndex;
      }).forEach(function (key) {
        var rect = refs[key].getBoundingClientRect();
        var left = rect.left,
            top = rect.top,
            width = rect.width,
            height = rect.height;
        left -= offset.x;
        top -= offset.y;
        var isOverlapped = mouse.x > left && mouse.x < left + width && mouse.y > top && mouse.y < top + height && currentRect.width > width && currentRect.height > height;

        if (isOverlapped) {
          _this3.showHandler(Number(key));
        }
      });
    }
  }, {
    key: "stopDrag",
    value: function stopDrag() {
      var mode = this.state.mode;

      if (_lodash["default"].includes([_constants.modes.DRAG, _constants.modes.ROTATE, _constants.modes.SCALE], mode)) {
        this.setState({
          mode: _constants.modes.FREE
        });
      }
    }
  }, {
    key: "showEditor",
    value: function showEditor() {
      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects,
          currentObject = objects[selectedObjectIndex],
          objectComponent = this.getObjectComponent(currentObject.type);

      if (objectComponent.meta.editor) {
        this.setState({
          mode: _constants.modes.EDIT_OBJECT,
          showHandler: false
        });
      }
    }
  }, {
    key: "getObjectComponent",
    value: function getObjectComponent(type) {
      var objectTypes = this.props.objectTypes;
      return objectTypes[type];
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      var _this$props3 = this.props,
          width = _this$props3.width,
          height = _this$props3.height;
      var _this$props4 = this.props,
          _this$props4$canvasWi = _this$props4.canvasWidth,
          canvasWidth = _this$props4$canvasWi === void 0 ? width : _this$props4$canvasWi,
          _this$props4$canvasHe = _this$props4.canvasHeight,
          canvasHeight = _this$props4$canvasHe === void 0 ? height : _this$props4$canvasHe;
      return {
        width: width,
        height: height,
        canvasWidth: canvasWidth,
        canvasHeight: canvasHeight,
        canvasOffsetX: (canvasWidth - width) / 2,
        canvasOffsetY: (canvasHeight - height) / 2
      };
    }
  }, {
    key: "renderSVG",
    value: function renderSVG() {
      var _this4 = this;

      var canvas = this.getCanvas();
      var width = canvas.width,
          height = canvas.height,
          canvasOffsetX = canvas.canvasOffsetX,
          canvasOffsetY = canvas.canvasOffsetY;
      var _this$props5 = this.props,
          background = _this$props5.background,
          objects = _this$props5.objects,
          svgStyle = _this$props5.svgStyle,
          objectTypes = _this$props5.objectTypes;
      return _react["default"].createElement(_SVGRenderer["default"], {
        background: background,
        width: width,
        canvas: canvas,
        height: height,
        objects: objects,
        onMouseOver: this.showHandler.bind(this),
        objectTypes: objectTypes,
        objectRefs: this.objectRefs,
        onRender: function onRender(ref) {
          return _this4.svgElement = ref;
        },
        onMouseDown: this.newObject.bind(this)
      });
    }
  }, {
    key: "selectTool",
    value: function selectTool(tool) {
      this.setState({
        selectedTool: tool,
        mode: _constants.modes.DRAW,
        currentObjectIndex: null,
        showHandler: false,
        handler: null
      });
    }
  }, {
    key: "handleObjectChange",
    value: function handleObjectChange(key, value) {
      var selectedObjectIndex = this.state.selectedObjectIndex; // console.log(this.state, key, value)

      this.updateObject(selectedObjectIndex, _defineProperty({}, key, value));
    }
  }, {
    key: "handleArrange",
    value: function handleArrange(arrange) {
      var _this5 = this;

      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects;
      var object = objects[selectedObjectIndex];
      var arrangers = {
        'front': function front(rest, object) {
          return [[].concat(_toConsumableArray(rest), [object]), rest.length];
        },
        'back': function back(rest, object) {
          return [[object].concat(_toConsumableArray(rest)), 0];
        }
      };
      var rest = objects.filter(function (object, index) {
        return selectedObjectIndex !== index;
      });
      this.setState({
        selectedObjectIndex: null
      }, function () {
        var arranger = arrangers[arrange];

        var _arranger = arranger(rest, object),
            _arranger2 = _slicedToArray(_arranger, 2),
            arranged = _arranger2[0],
            newIndex = _arranger2[1];

        _this5.props.onUpdate(arranged);

        _this5.setState({
          selectedObjectIndex: newIndex
        });
      });
    }
  }, {
    key: "removeCurrent",
    value: function removeCurrent() {
      var _this6 = this;

      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects;
      var rest = objects.filter(function (object, index) {
        return selectedObjectIndex !== index;
      });
      this.setState({
        currentObjectIndex: null,
        selectedObjectIndex: null,
        showHandler: false,
        handler: null
      }, function () {
        _this6.objectRefs = {};

        _this6.props.onUpdate(rest);
      });
    }
  }, {
    key: "moveSelectedObject",
    value: function moveSelectedObject(attr, points, event, key) {
      var selectedObjectIndex = this.state.selectedObjectIndex;
      var objects = this.props.objects;
      var object = objects[selectedObjectIndex];

      if (key.startsWith('shift')) {
        points *= 10;
      }

      var changes = _objectSpread({}, object, _defineProperty({}, attr, object[attr] + points));

      this.updateObject(selectedObjectIndex, changes);
      this.updateHandler(selectedObjectIndex, changes);
    }
  }, {
    key: "getKeymapHandlers",
    value: function getKeymapHandlers() {
      var _this7 = this;

      var handlers = {
        removeObject: this.removeCurrent.bind(this),
        moveLeft: this.moveSelectedObject.bind(this, 'x', -1),
        moveRight: this.moveSelectedObject.bind(this, 'x', 1),
        moveUp: this.moveSelectedObject.bind(this, 'y', -1),
        moveDown: this.moveSelectedObject.bind(this, 'y', 1),
        closePath: function closePath() {
          return _this7.setState({
            mode: _constants.modes.FREE
          });
        }
      };
      return _lodash["default"].mapValues(handlers, function (handler) {
        return function (event, key) {
          if (event.target.tagName !== 'INPUT') {
            event.preventDefault();
            handler(event, key);
          }
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var _this$state3 = this.state,
          showHandler = _this$state3.showHandler,
          handler = _this$state3.handler,
          mode = _this$state3.mode,
          selectedObjectIndex = _this$state3.selectedObjectIndex,
          selectedTool = _this$state3.selectedTool;
      var _this$props6 = this.props,
          objects = _this$props6.objects,
          objectTypes = _this$props6.objectTypes,
          InsertMenuComponent = _this$props6.insertMenu;
      var currentObject = objects[selectedObjectIndex],
          isEditMode = mode === _constants.modes.EDIT_OBJECT,
          showPropertyPanel = selectedObjectIndex !== null;

      var _this$getCanvas3 = this.getCanvas(),
          width = _this$getCanvas3.width,
          height = _this$getCanvas3.height,
          canvasWidth = _this$getCanvas3.canvasWidth,
          canvasHeight = _this$getCanvas3.canvasHeight;

      var objectComponent, objectWithInitial, ObjectEditor;

      if (currentObject) {
        objectComponent = this.getObjectComponent(currentObject.type);
        objectWithInitial = _objectSpread({}, objectComponent.meta.initial, currentObject);
        ObjectEditor = objectComponent.meta.editor;
      }

      return _react["default"].createElement(_reactHotkeys.HotKeys, {
        keyMap: this.keyMap,
        style: styles.keyboardManager,
        handlers: this.getKeymapHandlers()
      }, _react["default"].createElement("div", {
        className: 'container',
        style: _objectSpread({}, styles.container, this.props.style, {
          padding: 0
        }),
        onMouseMove: this.onDrag.bind(this),
        onMouseUp: this.stopDrag.bind(this)
      }, InsertMenuComponent && _react["default"].createElement(InsertMenuComponent, {
        tools: objectTypes,
        currentTool: selectedTool,
        onSelect: this.selectTool.bind(this)
      }), _react["default"].createElement("div", {
        style: styles.canvasContainer
      }, isEditMode && ObjectEditor && _react["default"].createElement(ObjectEditor, {
        object: currentObject,
        offset: this.getOffset(),
        onUpdate: function onUpdate(object) {
          return _this8.updateObject(selectedObjectIndex, object);
        },
        onClose: function onClose() {
          return _this8.setState({
            mode: _constants.modes.FREE
          });
        },
        width: width,
        height: height
      }), showHandler && _react["default"].createElement(_Handler["default"], {
        boundingBox: handler,
        canResize: (0, _lodash["default"])(currentObject).has('width') || (0, _lodash["default"])(currentObject).has('height'),
        canRotate: (0, _lodash["default"])(currentObject).has('rotate'),
        onMouseLeave: this.hideHandler.bind(this),
        onDoubleClick: this.showEditor.bind(this),
        onDrag: this.startDrag.bind(this, _constants.modes.DRAG),
        onResize: this.startDrag.bind(this, _constants.modes.SCALE),
        onRotate: this.startDrag.bind(this, _constants.modes.ROTATE)
      }), this.renderSVG())));
    }
  }]);

  return Designer;
}(_react.Component);

_defineProperty(Designer, "defaultProps", {
  objectTypes: {
    'text': _objects.Text,
    'rectangle': _objects.Rect,
    'circle': _objects.Circle,
    'polygon': _objects.Path,
    'image': _objects.Image
  },
  snapToGrid: 1,
  svgStyle: {},
  insertMenu: _InsertMenu["default"]
});

var styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row'
  },
  canvasContainer: {
    position: 'relative'
  },
  keyboardManager: {
    outline: 'none'
  }
};
exports.styles = styles;
var _default = Designer;
exports["default"] = _default;