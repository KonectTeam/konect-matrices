import KonectMatrixProduct from "../component/KonectMatrixProduct";

import { SketchComponentFactory, Factory } from "konect-api-types-ts";

@Factory(KonectMatrixProduct)
export default class KonectMatrixProductFactory implements SketchComponentFactory<KonectMatrixProduct> {

    fromJSON(json: object): KonectMatrixProduct {
        return new KonectMatrixProduct();
    }

    toJSON(component: KonectMatrixProduct): object {
        return {}
    }
}