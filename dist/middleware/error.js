"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = errorHandler;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

require("source-map-support/register");

var _log = require("../lib/log");

async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (error) {
    ctx.status = error.statusCode || 500;
    ctx.body = error.toJSON ? error.toJSON() : (0, _objectSpread2.default)({
      message: error.message
    }, error);

    _log.log.error('Error in request', error);
  }
}
//# sourceMappingURL=error.js.map