import { config } from "dotenv";
import { resolve } from "path";
import { startServer } from "./lib/server";
import { log } from "./lib/log";

config({path: resolve(__dirname, `../.env.${process.env.NODE_ENV}`)})

startServer().then(
    app => app.listen(process.env.PORT, () => log.debug(`Server listening on ${process.env.PORT}`))
).catch(err => {
    log.error('Server failed to initialize', err)
    process.exit(1)
})