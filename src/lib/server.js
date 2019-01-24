import { createServer } from "http";
import Koa from "koa";
import cors from "@koa/cors";
import boom from "boom";
import bodyparser from "koa-bodyparser";
import logger from "koa-logger"
import helmet from "koa-helmet";
import { scopePerRequest, loadControllers } from "awilix-koa";
import { notFound } from "boom";

import { log } from "./log";
import { errorHandler } from "../middleware/error";
import { registerContext } from "../middleware/register-context";
import { configureContainer } from "./container";
import { notFoundHandler } from "../middleware/not-found";

export async function startServer(){
    log.debug('Starting server...')

    // Create new Koa Instance
    const app = new Koa()
    const container = (app.container = configureContainer())
    // Initialize the CORS, BodyParser, Helmet and Logger Middlewares
    app.use(errorHandler)
    .use(cors())
    .use(bodyparser())
    .use(logger())
    .use(scopePerRequest(container))
    .use(registerContext)
    .use(loadControllers('../routes/*.js', {cwd: __dirname}))
    .use(helmet())
    .use(async ctx => notFound().data)

    // Create HTTP Server
    const server = createServer(app.callback());

    // Register Callback on server shutdown
    server.on('close', () => log.debug('Server shutting down...😪'))

    return server
}