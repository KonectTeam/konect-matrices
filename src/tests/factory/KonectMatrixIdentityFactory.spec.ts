import { expect } from "chai";

import KonectMatrixIdentity from "../../components/component/KonectMatrixIdentity";
import KonectMatrixIdentityFactory from "../../components/factory/KonectMatrixIdentityFactory";

let component: KonectMatrixIdentity;

const factory = new KonectMatrixIdentityFactory();

describe('Test the factory for the KonectMatrixIdentity component', () => {
    it('Parse a KonectMatrixIdentity from a valid JSON with positive value', () => {
        component = factory.fromJSON({
            dimensions: 100
        });

        expect(component.dimensions).to.be.equal(100);
    });

    it('Parse a KonectMatrixIdentity from a valid JSON with negative value', () => {
        component = factory.fromJSON({
            dimensions: -100
        });

        expect(component.dimensions).to.be.equal(-100);
    });

    it('Parse a KonectMatrixIdentity from a valid JSON with a 0 value', () => {
        component = factory.fromJSON({
            dimensions: 0
        });

        expect(component.dimensions).to.be.equal(0);
    });

    it('Parse a KonectMatrixIdentity with an empty JSON', () => {
        component = factory.fromJSON({ });

        expect(component.dimensions).to.be.equal(0);
    });


    it('Serialize a KonectMatrixIdentity from a valid JSON with positive value', () => {
        component = new KonectMatrixIdentity();
        component.setDimensions(100);

        const json = factory.toJSON(component);

        expect(json).deep.equal({ dimensions: 100 });
    });

    it('Serialize a KonectMatrixIdentity from a valid JSON with negative value', () => {
        component = new KonectMatrixIdentity();
        component.setDimensions(-100);
       
        const json = factory.toJSON(component);

        expect(json).deep.equal({ dimensions: -100 });
    });

    it('Serialize a KonectMatrixIdentity from a valid JSON with a 0 value', () => {
        component = new KonectMatrixIdentity();

        const json = factory.toJSON(component);

        expect(json).deep.equal({ dimensions: 0 });
    });
});