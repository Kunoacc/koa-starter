"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContext = registerContext;

require("source-map-support/register");

var _awilix = require("awilix");

async function registerContext(ctx, next) {
  ctx.state.container.register({
    userContext: (0, _awilix.asValue)({
      user: 'username'
    })
  });
  return next();
}
//# sourceMappingURL=register-context.js.map