"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var object = _ref.object,
      startPoint = _ref.startPoint,
      mouse = _ref.mouse;
  var objectX = startPoint.objectX,
      objectY = startPoint.objectY,
      clientX = startPoint.clientX,
      clientY = startPoint.clientY;
  var width = startPoint.width + mouse.x - clientX;
  var height = startPoint.height + mouse.y - clientY;
  return _objectSpread({}, object, {
    x: width > 0 ? objectX : objectX + width,
    y: height > 0 ? objectY : objectY + height,
    width: Math.abs(width),
    height: Math.abs(height)
  });
};

exports["default"] = _default;