import { expect } from "chai";

import { Matrix } from 'ml-matrix';

import KonectMatrixCenter from "../../components/component/KonectMatrixCenter";

let component: KonectMatrixCenter;

describe('Test the execution of KonectMatrixTranspose component', () => {
    beforeEach(() => component = new KonectMatrixCenter());

    it('Should throw an error because no matrix is set', () => {
        expect(() => component.execute()).to.throw('No data available to center the matrix');
    });

    it('Should return an empty matrix', () => {
        component.setMatrix(new Matrix(0, 0)); 
        const matrix = component.execute();
        expect(matrix.rows).to.be.equal(0);
        expect(matrix.columns).to.be.equal(0);
    });

    it('Should return a matrix with only one value', () => {
        component.setMatrix(new Matrix([
            [ 10 ]
        ]));
        const matrix = component.execute();
        expect(matrix.rows).to.be.equal(1);
        expect(matrix.columns).to.be.equal(1);
        expect(matrix.get(0, 0)).to.be.equal(0);
    });

    it('Should return the centered matrix', () => {
        const matrix = new Matrix([
            [ 10, 20 ],
            [ -100, 509]
        ]);
        
        component.setMatrix(matrix);
        const result = component.execute();
        expect(result.rows).to.be.equal(2);
        expect(result.columns).to.be.equal(2);

        expect(result).deep.equal(matrix.center());
    });
});