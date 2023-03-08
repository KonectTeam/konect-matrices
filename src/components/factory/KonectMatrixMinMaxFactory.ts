import KonectMatrixMinMax from "../component/KonectMatrixMinMax";

import { Factory, SketchComponentFactory } from "konect-api-types-ts";

import { MinMaxFunc } from "../utils/utils";

interface KonectMatrixMinMaxJSON {
    functionName: MinMaxFunc;
}

@Factory(KonectMatrixMinMax)
export default class KonectMatrixLoaderFactory implements SketchComponentFactory<KonectMatrixLoader> {
    
    fromJSON(rawJson: object) : KonectMatrixMinMax {
        const component = new KonectMatrixMinMax();
        const json: KonectMatrixMinMaxJSON = rawJson as KonectMatrixMinMaxJSON;
        component.setFunctionName(json.functionName ?? 'max');
        return component;

    }
    toJSON(component: KonectMatrixMinMax): object {
        const json: KonectMatrixMinMaxJSON = {
            functionName: component.functionName
        };

        return json;
    }
}