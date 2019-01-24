import { Bristol } from "bristol";
import Palin from "palin";

export const log = new Bristol();

if (process.env.LOG_LEVEL !== 'default') {
    log.addTarget('console').withFormatter(Palin, {
        rootFolderName: 'backend'
    })
}