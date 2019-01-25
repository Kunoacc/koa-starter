import bodyparser from "koa-bodyparser";
import { route, GET, POST, before } from "awilix-koa";

@route('/')
export default class Router{

    @GET()
    async getIndex(ctx){
        ctx.body = "YAYYYYYYYY! Shit Working"
    }
}