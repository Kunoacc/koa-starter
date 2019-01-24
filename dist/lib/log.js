"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = void 0;

require("source-map-support/register");

var _bristol = require("bristol");

var _palin = _interopRequireDefault(require("palin"));

const log = new _bristol.Bristol();
exports.log = log;

if (process.env.LOG_LEVEL !== 'default') {
  log.addTarget('console').withFormatter(_palin.default, {
    rootFolderName: 'backend'
  });
}
//# sourceMappingURL=log.js.map