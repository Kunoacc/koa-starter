import { createServer } from "http";
import Koa from "koa";
import cors from "@koa/cors";
import boom from "boom";
import bodyparser from "koa-bodyparser";
import logger from "koa-logger"
import helmet from "koa-helmet";

import { log } from "./log";
import { errorHandler } from "../middleware/error";

export async function startServer(){
    log.debug('Starting server...')

    // Create new Koa Instance
    const app = new Koa()

    // Initialize the CORS, BodyParser, Helmet and Logger Middlewares
    app.use(errorHandler)
    .use(cors())
    .use(bodyparser())
    .use(logger())
    .use(helmet())
    .use(async ctx => ctx.body = "CARS!!!")

    // Create HTTP Server
    const server = createServer(app.callback());

    // Register Callback on server shutdown
    server.on('close', () => log.debug('Server shutting down...😪'))

    return server
}