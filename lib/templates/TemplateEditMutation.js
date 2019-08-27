"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var TemplateLoader = _interopRequireWildcard(require("../TemplateLoader"));

var _TemplateType = _interopRequireDefault(require("../TemplateType"));

var _TemplateModel = _interopRequireDefault(require("../TemplateModel"));

var _TemplateFieldsType = _interopRequireDefault(require("../TemplateFieldsType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mutation = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: "TemplateEdit",
  inputFields: _objectSpread({
    id: {
      type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
    }
  }, _TemplateFieldsType["default"]),
  mutateAndGetPayload: function () {
    var _mutateAndGetPayload = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(args, context) {
      var id, active, template;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              id = args.id, active = args.active;
              _context.next = 3;
              return _TemplateModel["default"].findOne({
                _id: (0, _graphqlRelay.fromGlobalId)(id).id
              });

            case 3:
              template = _context.sent;

              if (template) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", {
                error: "Template inválido"
              });

            case 6:
              _context.next = 8;
              return template.update({
                active: active
              });

            case 8:
              // Clear dataloader cache
              TemplateLoader.clearCache(context, template._id);
              return _context.abrupt("return", {
                id: template._id,
                error: null
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function mutateAndGetPayload(_x, _x2) {
      return _mutateAndGetPayload.apply(this, arguments);
    }

    return mutateAndGetPayload;
  }(),
  outputFields: {
    template: {
      type: _TemplateType["default"],
      resolve: function () {
        var _resolve = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(_ref, args, context) {
          var id, newTemplate;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  id = _ref.id;
                  _context2.next = 3;
                  return TemplateLoader.load(context, id);

                case 3:
                  newTemplate = _context2.sent;

                  if (newTemplate) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt("return", null);

                case 6:
                  return _context2.abrupt("return", newTemplate);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function resolve(_x3, _x4, _x5) {
          return _resolve.apply(this, arguments);
        }

        return resolve;
      }()
    },
    error: {
      type: _graphql.GraphQLString,
      resolve: function resolve(_ref2) {
        var error = _ref2.error;
        return error;
      }
    }
  }
});
var _default = mutation;
exports["default"] = _default;
//# sourceMappingURL=TemplateEditMutation.js.map