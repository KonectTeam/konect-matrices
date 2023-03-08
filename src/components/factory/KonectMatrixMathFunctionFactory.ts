import { SketchComponentFactory, Factory } from "konect-api-types-ts";

import KonectMatrixMathFunction from "../component/KonectMatrixMathFunction";

import { availableMathFunction, MatrixMathFunction } from "../utils/utils";

interface KonectMatrixMathFunctionJSON {
    functionName: MatrixMathFunction;
}

export default class KonectMatrixMathFunctionFactory implements SketchComponentFactory<KonectMatrixMathFunction> {

    fromJSON(rawJSON: object): KonectMatrixMathFunction {
        const component = new KonectMatrixMathFunction();
        const json: KonectMatrixMathFunctionJSON = rawJSON as KonectMatrixMathFunctionJSON;
        const functionName = availableMathFunction.includes(json.functionName) ? json.functionName : availableMathFunction[0];
        component.setFunctionName(functionName);
        return component;
    }

    toJSON(component: KonectMatrixMathFunction): object {
        const json: KonectMatrixMathFunctionJSON = {
            functionName: component.functionName ?? availableMathFunction[0]
        };

        return json;
    }
}