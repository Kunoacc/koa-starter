"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureContainer = configureContainer;

require("source-map-support/register");

var _awilix = require("awilix");

var _log = require("./log");

const modulesToLoad = [['services/*.js', _awilix.Lifetime.SCOPED]];

function configureContainer() {
  const opts = {
    InjectionMode: _awilix.InjectionMode.CLASSIC
  };
  return (0, _awilix.createContainer)(opts).loadModules(modulesToLoad, {
    cwd: `${__dirname}/..`,
    formatName: 'camelCase'
  }).register({
    logger: (0, _awilix.asValue)(_log.log)
  });
}
//# sourceMappingURL=container.js.map