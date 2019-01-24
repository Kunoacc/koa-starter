import { log } from "../lib/log";

export async function errorHandler(ctx, next){
    try {
        await next();
    } catch (error) {
        ctx.status = error.statusCode || 500
        ctx.body = error.toJSON ? error.toJSON() : {message: error.message, ...error}
        log.error('Error in request', error)
    }
}