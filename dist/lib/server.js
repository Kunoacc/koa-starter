"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startServer = startServer;

require("source-map-support/register");

var _http = require("http");

var _koa = _interopRequireDefault(require("koa"));

var _cors = _interopRequireDefault(require("@koa/cors"));

var _boom = _interopRequireWildcard(require("boom"));

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

var _koaHelmet = _interopRequireDefault(require("koa-helmet"));

var _awilixKoa = require("awilix-koa");

var _log = require("./log");

var _error = require("../middleware/error");

var _registerContext = require("../middleware/register-context");

var _container = require("./container");

var _notFound = require("../middleware/not-found");

async function startServer() {
  _log.log.debug('Starting server...'); // Create new Koa Instance


  const app = new _koa.default();
  const container = app.container = (0, _container.configureContainer)(); // Initialize the CORS, BodyParser, Helmet and Logger Middlewares

  app.use(_error.errorHandler).use((0, _cors.default)()).use((0, _koaBodyparser.default)()).use((0, _koaLogger.default)()).use((0, _awilixKoa.scopePerRequest)(container)).use(_registerContext.registerContext).use((0, _awilixKoa.loadControllers)('../routes/*.js', {
    cwd: __dirname
  })).use((0, _koaHelmet.default)()).use(async ctx => (0, _boom.notFound)().data); // Create HTTP Server

  const server = (0, _http.createServer)(app.callback()); // Register Callback on server shutdown

  server.on('close', () => _log.log.debug('Server shutting down...😪'));
  return server;
}
//# sourceMappingURL=server.js.map