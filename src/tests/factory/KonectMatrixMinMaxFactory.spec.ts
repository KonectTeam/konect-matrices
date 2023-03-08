import { expect } from "chai";

import KonectMatrixMinMax from "../../components/component/KonectMatrixMinMax";
import KonectMatrixMinMaxFactory from "../../components/factory/KonectMatrixMinMaxFactory";

const factory = new KonectMatrixMinMaxFactory();

let component: KonectMatrixMinMax;

describe('Test the factory for the KonectMatrixMinMaxFactory', () => {
    it('Parse a KonectMatrixMinMax from a valid json with min value', () => {
        component = factory.fromJSON({
            functionName: 'min'
        });

        expect(component.functionName).to.be.equal('min');
    });

    it('Parse a KonectMatrixMinMax from a valid json with max value', () => {
        component = factory.fromJSON({
            functionName: 'max'
        }); 

        expect(component.functionName).to.be.equal('max');
    });

    it('Parse a KonectMatrixMinMax from an empty json', () => {
        component = factory.fromJSON({ });

        expect(component.functionName).to.be.equal('max');
    });


    it('Serialize a KonectMatrixMinMax with a function name equal to min', () => {
        component = new KonectMatrixMinMax();
        component.setFunctionName('max');
        const json = factory.toJSON(component);

        expect(json).deep.equal({ functionName: 'max' });
    });

    it('Serialize a KonectMatrixMinMax with a function name equal to min', () => {
        component = new KonectMatrixMinMax();
        component.setFunctionName('min');
        const json = factory.toJSON(component);

        expect(json).deep.equal({ functionName: 'min' });
    });

    it('Serialize a KonectMatrixMinMax withhout any function name defined', () => {
        component = new KonectMatrixMinMax();
        const json = factory.toJSON(component);
        
        expect(json).deep.equal({ functionName: 'max' });
    })
});