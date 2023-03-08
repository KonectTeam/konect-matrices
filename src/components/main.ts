import { GenericSketchComponentClass, KonectPlugin } from "konect-api-types-ts";
import { Component } from "vue";

import KonectMatrixLoader from "./component/KonectMatrixLoader";
import KonectMatrixAddition from "./component/KonectMatrixAddition";
import KonectMatrixIdentity from "./component/KonectMatrixIdentity";
import KonectMatrixSub from "./component/KonectMatrixSub";

import KonectMatrixLoaderFactory from "./factory/KonectMatrixLoaderFactory";
import KonectMatrixIdentityFactory from "./factory/KonectMatrixIdentityFactory";
import KonectMatrixAdditionFactory from "./factory/KonectMatrixAdditionFactory";
import KonectMatrixSubFactory from "./factory/KonectMatrixSubFactory";

import KonectMatrixLoaderPopup from './ui/KonectMatrixLoaderPopup.vue';
import KonectMatrixIdentityPopup from "./ui/KonectMatrixIdentityPopup.vue";
import KonectMatrixAdditionPopup from './ui/KonectMatrixAdditionPopup.vue';
import KonectMatrixSubPopup from './ui/KonectMatrixSubPopup.vue';


const popups: Map<GenericSketchComponentClass, Component> = new Map();

popups.set(KonectMatrixLoader, KonectMatrixLoaderPopup);
popups.set(KonectMatrixIdentity, KonectMatrixIdentityPopup);
popups.set(KonectMatrixAddition, KonectMatrixAdditionPopup);
popups.set(KonectMatrixSub, KonectMatrixSubPopup);

const plugin: KonectPlugin = {
    components: [
        KonectMatrixLoader,
        KonectMatrixIdentity,
        KonectMatrixAddition,
        KonectMatrixSub
    ],

    factories: [
        KonectMatrixLoaderFactory,
        KonectMatrixIdentityFactory,
        KonectMatrixAdditionFactory,
        KonectMatrixSubFactory
    ],

    popup: popups,

    pluginInformation: {
        description: 'Components that interfact with matrices an apply calculations',
        name: 'Matrices'
    }
};

export { plugin};