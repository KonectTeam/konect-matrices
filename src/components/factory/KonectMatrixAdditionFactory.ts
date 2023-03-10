import { Factory, SketchComponentFactory } from "konect-api-types-ts";

import KonectMatrixAddition from "../component/KonectMatrixAddition";

@Factory(KonectMatrixAddition)
export default class KonectMatrixAdditionFactory implements SketchComponentFactory<KonectMatrixAddition> {
    fromJSON(json: object): KonectMatrixAddition {
        return new KonectMatrixAddition();
    }

    toJSON(component: KonectMatrixAddition): object {
        return {};
    }
}