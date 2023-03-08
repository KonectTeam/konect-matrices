import KonectMatrixMathFunction from "../../components/component/KonectMatrixMathFunction";
import { expect } from "chai";

import { Matrix } from 'ml-matrix';

let component: KonectMatrixMathFunction;

describe('Test the execution of the component KonectMatrixIdentity', () => {
    beforeEach(() => {
        component = new KonectMatrixMathFunction();
    });


    it('Should throw an error because no matrix is defined', () => {
        expect(() => component.execute()).to.throw('No matrix available to compute mathematical function');
    });

    it('Should return an empty matrix', () => {
        component.setMatrix(new Matrix(0, 0));
        expect(component.execute()).deep.equal(new Matrix(0, 0));
    });

    it('Should return a matrix with only postive values', () => {
        const matrix = new Matrix([[
            -10, -20, 90
        ]]);

        component.setMatrix(matrix);
        component.setFunctionName('abs');
        const result = component.execute();
        expect(result.rows).to.equal(1);
        expect(result.columns).to.equal(3);
        expect(result.get(0, 0)).to.equal(10);
        expect(result.get(0, 1)).to.equal(20);
        expect(result.get(0, 2)).to.equal(90);
    });

    it('Should return a matrix with exponential values', () => {
        component.setMatrix(new Matrix([[
            -10, 40
        ]]));

        component.setFunctionName('exp');
        const result = component.execute();

        expect(result.rows).to.equal(1);
        expect(result.columns).to.equal(2);
        expect(result.get(0, 0)).to.equal(Math.exp(-10));
        expect(result.get(0, 1)).to.equal(Math.exp(40));
    });
});