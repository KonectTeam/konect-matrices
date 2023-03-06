import { GenericSketchComponentClass, KonectPlugin } from "konect-api-types-ts";
import { Component } from "vue";

import KonectMatrixLoader from "./component/KonectMatrixLoader";
import KonectMatrixLoaderFactory from "./factory/KonectMatrixLoaderFactory";

import KonectMatrixLoaderPopup from './ui/KonectMatrixLoaderPopup.vue';

const popups: Map<GenericSketchComponentClass, Component> = new Map();

popups.set(KonectMatrixLoader, KonectMatrixLoaderPopup);

const plugin: KonectPlugin = {
    components: [
        KonectMatrixLoader
    ],

    factories: [
        KonectMatrixLoaderFactory
    ],

    popup: popups,

    pluginInformation: {
        description: 'Components that interfact with matrices an apply calculations',
        name: 'Matrices'
    }
};

export { plugin};