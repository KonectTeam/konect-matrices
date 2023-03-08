import { SketchComponentFactory, Factory } from "konect-api-types-ts";

import KonectMatrixCenter from "../component/KonectMatrixCenter";

@Factory(KonectMatrixCenter)
export default class KonectMatrixCenterFactory implements SketchComponentFactory<KonectMatrixCenter> {
    
    fromJSON(json: object): KonectMatrixCenter {
        return new KonectMatrixCenter();
    }
    
    toJSON(component: KonectMatrixCenter): object {
        return {}
    }
}