import { GenericSketchComponentClass, KonectPlugin } from "konect-api-types-ts";
import { Component } from "vue";

import KonectMatrixLoader from "./component/KonectMatrixLoader";
import KonectMatrixAddition from "./component/KonectMatrixAddition";
import KonectMatrixIdentity from "./component/KonectMatrixIdentity";
import KonectMatrixSub from "./component/KonectMatrixSub";
import KonectMatrixMinMax from "./component/KonectMatrixMinMax";
import KonectMatrixViewer from "@/components/component/KonectMatrixViewer";
import KonectMatrixMathFunction from "./component/KonectMatrixMathFunction";
import KonectMatrixTranspose from "./component/KonectMatrixTranspose";

import KonectMatrixLoaderFactory from "./factory/KonectMatrixLoaderFactory";
import KonectMatrixIdentityFactory from "./factory/KonectMatrixIdentityFactory";
import KonectMatrixAdditionFactory from "./factory/KonectMatrixAdditionFactory";
import KonectMatrixSubFactory from "./factory/KonectMatrixSubFactory";
import KonectMatrixMinMaxFactory from "./factory/KonectMatrixMinMaxFactory";
import KonectMatrixViewerFactory from "./factory/KonectMatrixViewerFactory";
import KonectMatrixMathFunctionFactory from "./factory/KonectMatrixMathFunctionFactory";
import KonectMatrixTransposeFactory from "./factory/KonectMatrixTransposeFactory";

import KonectMatrixLoaderPopup from './ui/KonectMatrixLoaderPopup.vue';
import KonectMatrixIdentityPopup from "./ui/KonectMatrixIdentityPopup.vue";
import KonectMatrixAdditionPopup from './ui/KonectMatrixAdditionPopup.vue';
import KonectMatrixSubPopup from './ui/KonectMatrixSubPopup.vue';
import KonectMatrixMinMaxPopup from './ui/KonectMatrixMinMaxPopup.vue';
import KonectMatrixViewerPopup from './ui/KonectMatrixViewerPopup.vue';
import KonectMatrixMathFunctionPopup from './ui/KonectMatrixMathFunctionPopup.vue';
import KonectMatrixTransposePopup from './ui/KonectMatrixTransposePopup.vue';


const popups: Map<GenericSketchComponentClass, Component> = new Map();

popups.set(KonectMatrixLoader, KonectMatrixLoaderPopup);
popups.set(KonectMatrixIdentity, KonectMatrixIdentityPopup);
popups.set(KonectMatrixAddition, KonectMatrixAdditionPopup);
popups.set(KonectMatrixSub, KonectMatrixSubPopup);
popups.set(KonectMatrixMinMax, KonectMatrixMinMaxPopup);
popups.set(KonectMatrixViewer, KonectMatrixViewerPopup);
popups.set(KonectMatrixMathFunction, KonectMatrixMathFunctionPopup);
popups.set(KonectMatrixTranspose, KonectMatrixTransposePopup);

const plugin: KonectPlugin = {
    components: [
        KonectMatrixLoader,
        KonectMatrixIdentity,
        KonectMatrixAddition,
        KonectMatrixSub,
        KonectMatrixMinMax,
        KonectMatrixViewer,
        KonectMatrixMathFunction,
        KonectMatrixTranspose
    ],

    factories: [
        KonectMatrixLoaderFactory,
        KonectMatrixIdentityFactory,
        KonectMatrixAdditionFactory,
        KonectMatrixSubFactory,
        KonectMatrixMinMaxFactory,
        KonectMatrixViewerFactory,
        KonectMatrixMathFunctionFactory,
        KonectMatrixTransposeFactory
    ],

    popup: popups,

    pluginInformation: {
        description: 'Components that interfact with matrices an apply calculations',
        name: 'Matrices'
    }
};

export { plugin};