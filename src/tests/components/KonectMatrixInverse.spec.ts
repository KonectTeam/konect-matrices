import { expect } from "chai";

import KonectMatrixInverse from "../../components/component/KonectMatrixInverse";

import { Matrix } from 'ml-matrix';

let component: KonectMatrixInverse;

describe('Test the execution of the KonectMatrixInverse component', () => {
    beforeEach(() => component = new KonectMatrixInverse());

    it('Should throw an exception because the matrix is undefined', () => {
        expect(() => component.execute()).to.throw('No matrix available to compute eigen values');
    });

    it('Should return an empty matrix', () => {
        component.setMatrix(new Matrix(0, 0));
        const result = component.execute();

        expect(result.rows).to.be.equal(0);
        expect(result.columns).to.be.equal(0);
    });

    it('Should return a matrix with values like 3/50, -1/25, 1/50 and 1/50', () => {
        component.setMatrix(new Matrix([
            [ 10, 20 ],
            [ -10, 30 ]
        ]));

        const result = component.execute();
        expect(result.columns).to.be.equal(2);
        expect(result.rows).to.be.equal(2);
        expect(result.get(0, 0)).to.be.equal(3 / 50);
        expect(result.get(0, 1)).to.be.equal(-1 / 25);
        expect(result.get(1, 0)).to.be.equal(1 / 50);
        expect(result.get(1, 1)).to.be.equal(1 / 50);
    });
});