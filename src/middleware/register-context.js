import { asValue } from "awilix";

export async function registerContext(ctx, next) {
    ctx.state.container.register({
        userContext: asValue({
            user: 'username'
        })
    })
    return next()
}