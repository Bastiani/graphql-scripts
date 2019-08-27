"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _shelljs = _interopRequireDefault(require("shelljs"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loadTemplates = function loadTemplates(module, projectDir) {
  // Loader
  _shelljs["default"].cat("".concat(__dirname, "/templates/TemplateLoader.txt")).to("".concat(projectDir, "/modules/").concat(module, "/").concat((0, _utils.capitalize)(module), "Loader.ts"));

  _shelljs["default"].sed('-i', /\*?Template/g, "".concat((0, _utils.capitalize)(module)), "".concat(projectDir, "/modules/").concat(module, "/").concat((0, _utils.capitalize)(module), "Loader.ts"));

  _shelljs["default"].sed('-i', 'templates', "".concat((0, _utils.lowercase)(module), "s"), "".concat(projectDir, "/modules/").concat(module, "/").concat((0, _utils.capitalize)(module), "Loader.ts")); // Model


  _shelljs["default"].cat("".concat(__dirname, "/templates/TemplateModel.txt")).to("".concat(projectDir, "/modules/").concat(module, "/").concat((0, _utils.capitalize)(module), "Model.ts"));

  _shelljs["default"].sed('-i', /\*?Template/g, "".concat((0, _utils.capitalize)(module)), "".concat(projectDir, "/modules/").concat(module, "/").concat((0, _utils.capitalize)(module), "Model.ts")); // Type


  _shelljs["default"].cat("".concat(__dirname, "/templates/TemplateType.txt")).to("".concat(projectDir, "/modules/").concat(module, "/").concat((0, _utils.capitalize)(module), "Type.ts"));

  _shelljs["default"].sed('-i', /\*?Template/g, "".concat((0, _utils.capitalize)(module)), "".concat(projectDir, "/modules/").concat(module, "/").concat((0, _utils.capitalize)(module), "Type.ts")); // MutationAdd


  _shelljs["default"].cat("".concat(__dirname, "/templates/TemplateAddMutation.js")).to("".concat(projectDir, "/modules/").concat(module, "/mutations/").concat((0, _utils.capitalize)(module), "AddMutation.js"));

  _shelljs["default"].sed('-i', /\*?Template/g, "".concat((0, _utils.capitalize)(module)), "".concat(projectDir, "/modules/").concat(module, "/mutations/").concat((0, _utils.capitalize)(module), "AddMutation.js"));

  _shelljs["default"].sed('-i', /\*?template/g, "".concat((0, _utils.lowercase)(module)), "".concat(projectDir, "/modules/").concat(module, "/mutations/").concat((0, _utils.capitalize)(module), "AddMutation.js")); // MutationEdit


  _shelljs["default"].cat("".concat(__dirname, "/templates/TemplateEditMutation.js")).to("".concat(projectDir, "/modules/").concat(module, "/mutations/").concat((0, _utils.capitalize)(module), "EditMutation.js"));

  _shelljs["default"].sed('-i', /\*?Template/g, "".concat((0, _utils.capitalize)(module)), "".concat(projectDir, "/modules/").concat(module, "/mutations/").concat((0, _utils.capitalize)(module), "EditMutation.js"));

  _shelljs["default"].sed('-i', /\*?template/g, "".concat((0, _utils.lowercase)(module)), "".concat(projectDir, "/modules/").concat(module, "/mutations/").concat((0, _utils.capitalize)(module), "EditMutation.js"));
};

var _default = loadTemplates;
exports["default"] = _default;
//# sourceMappingURL=loadTemplates.js.map