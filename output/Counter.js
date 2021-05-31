"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = props => {
  var [counter, setCounter] = _react.default.useState(0);

  var increase = () => {
    setCounter(counter + 1);
  };

  var decrease = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
  };

  return dom("div", null, dom("p", null, "Current count ", counter), dom("button", {
    onClick: increase
  }, "+"), dom("button", {
    onClick: decrease
  }, "-"));
};

var _default = Counter;
exports.default = _default;