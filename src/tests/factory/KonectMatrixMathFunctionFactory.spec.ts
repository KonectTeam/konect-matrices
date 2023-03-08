import { expect } from "chai";

import KonectMatrixMathFunction from "../../components/component/KonectMatrixMathFunction";
import KonectMatrixMathFunctionFactory from "../../components/factory/KonectMatrixMathFunctionFactory";

import { availableMathFunction } from "../../components/utils/utils";

let component: KonectMatrixMathFunction;

const factory = new KonectMatrixMathFunctionFactory();

describe('Test the factory for the KonectMatrixMathFunction component', () => {
    it('Parse a KonectMatrixMathFunction with a valid JSON', () => {
        component = factory.fromJSON({
            functionName: 'cos'
        });
        expect(component.functionName).to.be.equal('cos');
    });

    it('Parse a KonectMatrixMathFunction with an empty JSON', () => {
        component = factory.fromJSON({ });
        expect(component.functionName).to.be.equal(availableMathFunction[0]);
    });

    it('Parse a KonectMatrixMathFunction with a valid JSON, but the function name is unknown', () => {
        component = factory.fromJSON({ functionName: 'unknown' });
        expect(component.functionName).to.be.equal(availableMathFunction[0]);
    })
    
    it('Serialize a KonectMatrixMathFunction with a function name set', () => {
        component = new KonectMatrixMathFunction();
        component.setFunctionName(availableMathFunction[2]);
        const json = factory.toJSON(component);

        expect(json).deep.be.equal({ functionName: availableMathFunction[2] });;
    });

    it('Serialize a KonectMatrixMathFuncton without function name', () => {
        component = new KonectMatrixMathFunction();
        const json = factory.toJSON(component);

        expect(json).deep.be.equal({ functionName: availableMathFunction[0] });
    });
});