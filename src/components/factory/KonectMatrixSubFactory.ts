import { SketchComponentFactory } from "konect-api-types-ts";

import KonectMatrixSub from "../component/KonectMatrixSub";

export default class KonectMatrixSubFactory implements SketchComponentFactory<KonectMatrixSub> {
    fromJSON(json: object): KonectMatrixSub {
        return new KonectMatrixSub();
    }

    toJSON(component: KonectMatrixSub): object {
        return {};
    }
}