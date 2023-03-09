import { SketchComponentFactory, Factory } from "konect-api-types-ts";

import KonectMatrixInverse from "../component/KonectMatrixInverse";

@Factory(KonectMatrixInverse)
export default class KonectMatrixInverseFactory implements SketchComponentFactory<KonectMatrixInverse> {
    
    fromJSON(json: object): KonectMatrixInverse {
        return new KonectMatrixInverse();
    }

    toJSON(component: KonectMatrixInverse): object {
        return {}
    }
}