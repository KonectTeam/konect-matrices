import { expect } from "chai";

import KonectMatrixLoader from "../../components/component/KonectMatrixLoader";
import KonectMatrixLoaderFactory from "../../components/factory/KonectMatrixLoaderFactory";

const factory = new KonectMatrixLoaderFactory();

let component: KonectMatrixLoader;

describe('Test the factory for the KonectmatrixLoader', () => {
    it('Parse a KonectMatirxLoader from a valid json', () => {
        component = factory.fromJSON({
            data: '10 20'
        });

        expect(component.rawMatrix).to.equal('10 20');
    });

    it('Parse a KonectMatrixLoader from an empty data', () => {
        component = factory.fromJSON({data: ''});

        expect(component.rawMatrix).to.equal('');
    });

    it('Parse a KonectMatrixLoader from an empty json Object', () => {
        component = factory.fromJSON({});

        expect(component.rawMatrix).to.equal('');
    });


    it('Serialize a KonectMatrixLoader with set raw matrix', () => {
        component = new KonectMatrixLoader();
        component.setRawMatrix("10 \n 40");

        const json = factory.toJSON(component);

        expect(json).deep.equals({ data: '10 \n 40'});
    });

    it('Serialize a KonectMatrixLoader with an empty json', () => {
        component = new KonectMatrixLoader();

        const json = factory.toJSON(component);

        expect(json).deep.equals({ data: '' });
    });
});