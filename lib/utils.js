"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lowercase = exports.capitalize = void 0;

var capitalize = function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

exports.capitalize = capitalize;

var lowercase = function lowercase(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toLowerCase() + s.slice(1);
};

exports.lowercase = lowercase;
//# sourceMappingURL=utils.js.map