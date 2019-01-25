import { createContainer, asValue, Lifetime, InjectionMode, asClass } from "awilix";
import { log } from "./log";

const modulesToLoad = [
    ['services/*.js', Lifetime.SCOPED],
]

export function configureContainer() {
    const opts = {
        InjectionMode: InjectionMode.CLASSIC
    }
    return createContainer(opts)
    .loadModules(modulesToLoad, {
        cwd: `${__dirname}/..`,
        formatName: 'camelCase'
    }).register(
        {
            logger: asValue(log),
        }
    )
}