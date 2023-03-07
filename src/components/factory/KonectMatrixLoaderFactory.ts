import KonectMatrixLoader from "../component/KonectMatrixLoader";

import { Factory, SketchComponentFactory } from "konect-api-types-ts";

interface KonectMatrixLoaderJSON {
    data: string;
}

@Factory(KonectMatrixLoader)
export default class KonectMatrixLoaderFactory implements SketchComponentFactory<KonectMatrixLoader> {
    
    fromJSON(rawJson: object) : KonectMatrixLoader {
        const component = new KonectMatrixLoader();
        const json: KonectMatrixLoaderJSON = rawJson as KonectMatrixLoaderJSON;
        component.setRawMatrix(json.data ?? '');
        return component;

    }
    toJSON(component: KonectMatrixLoader): object {
        const json: KonectMatrixLoaderJSON = {
            data: component.rawMatrix
        };

        return json;
    }
}