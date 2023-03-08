import { SketchComponentFactory, Factory } from "konect-api-types-ts";

import KonectMatrixTranspose from "../component/KonectMatrixTranspose";

@Factory(KonectMatrixTranspose)
export default class KonectMatrixTransposeFactory implements SketchComponentFactory<KonectMatrixTranspose> {
    
    fromJSON(json: object): KonectMatrixTranspose {
        return new KonectMatrixTranspose();
    }

    toJSON(component: KonectMatrixTranspose): object {
        return {}
    }
}