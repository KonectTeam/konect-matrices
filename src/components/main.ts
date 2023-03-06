import { KonectPlugin } from "konect-api-types-ts";

import { KonectMatriceLoader } from "./component/KonectMatriceLoader";

const plugin: KonectPlugin = {
    components: [
        KonectMatriceLoader
    ],

    factories: [

    ],

    popup: new Map(),

    pluginInformation: {
        description: 'Components that interfact with matrices an apply calculations',
        name: 'Matrices'
    }
};

export { plugin};