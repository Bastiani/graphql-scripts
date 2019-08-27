#!/usr/bin/env babel-node
"use strict";

var _inquirer = _interopRequireDefault(require("inquirer"));

var _chalk = _interopRequireDefault(require("chalk"));

var _figlet = _interopRequireDefault(require("figlet"));

var _shelljs = _interopRequireDefault(require("shelljs"));

var _utils = require("./utils");

var _loadTemplates = _interopRequireDefault(require("./loadTemplates"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var init = function init() {
  console.log(_chalk["default"].green(_figlet["default"].textSync('GraphQL CLI', {
    // font: "Ghost",
    horizontalLayout: 'default',
    verticalLayout: 'default'
  })));
};

var askQuestions = function askQuestions() {
  var processAnswers = function processAnswers(answers) {
    if (answers.other === 'Other') {
      var _questions = [{
        name: 'CUSTOM_DIR',
        type: 'input',
        message: 'Custom directory?'
      }];
      return _inquirer["default"].prompt(_questions);
    }

    return null;
  };

  var questions = [{
    name: 'MODULE',
    type: 'input',
    message: 'What is the name of the graphql module?'
  }, {
    name: 'PROJECT_DIR',
    type: 'input',
    message: 'Directory of the project',
    "default": process.cwd()
  }];
  return _inquirer["default"].prompt(questions, processAnswers);
};

var createFiles = function createFiles(module, projectDir) {
  _shelljs["default"].mkdir('-p', ["".concat(projectDir, "/modules/").concat(module, "/mutations")]); // modules/{module}/{module}Model.js
  // modules/{module}/{module}Type.js
  // modules/{module}/{module}Loader.js
  // modules/{module}/mutations/{module}AddMutation.js
  // modules/{module}/mutations/{module}EditMutation.js


  var files = ["".concat(projectDir, "/modules/").concat(module, "/").concat((0, _utils.capitalize)(module), "Model.ts"), "".concat(projectDir, "/modules/").concat(module, "/").concat((0, _utils.capitalize)(module), "Type.ts"), "".concat(projectDir, "/modules/").concat(module, "/").concat((0, _utils.capitalize)(module), "Loader.ts"), "".concat(projectDir, "/modules/").concat(module, "/mutations/").concat((0, _utils.capitalize)(module), "AddMutation.js"), "".concat(projectDir, "/modules/").concat(module, "/mutations/").concat((0, _utils.capitalize)(module), "EditMutation.js")];

  _shelljs["default"].touch(files);

  (0, _loadTemplates["default"])(module, projectDir);
  return files;
};

var success = function success(filepath) {
  console.log(_chalk["default"].white.bgGreen.bold("Done! Files created at ".concat(filepath)));
};

var run =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var answers, MODULE, PROJECT_DIR;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // show script introduction
            init(); // ask questions

            _context.next = 3;
            return askQuestions();

          case 3:
            answers = _context.sent;
            MODULE = answers.MODULE, PROJECT_DIR = answers.PROJECT_DIR; // create the file

            createFiles(MODULE, PROJECT_DIR); // show success message

            success(PROJECT_DIR);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function run() {
    return _ref.apply(this, arguments);
  };
}();

run();
//# sourceMappingURL=index.js.map