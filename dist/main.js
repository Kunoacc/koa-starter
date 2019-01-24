"use strict";

require("source-map-support/register");

var _dotenv = require("dotenv");

var _path = require("path");

var _server = require("./lib/server");

var _log = require("./lib/log");

(0, _dotenv.config)({
  path: (0, _path.resolve)(__dirname, `../.env.${process.env.NODE_ENV}`)
});
(0, _server.startServer)().then(app => app.listen(process.env.PORT, () => _log.log.debug(`Server listening on ${process.env.PORT}`))).catch(err => {
  _log.log.error('Server failed to initialize', err);

  process.exit(1);
});
//# sourceMappingURL=main.js.map