import { expect } from "chai";

import { Matrix } from 'ml-matrix';

import KonectMatrixTranspose from "../../components/component/KonectMatrixTranspose";

let component: KonectMatrixTranspose;

describe('Test the execution of KonectMatrixTranspose component', () => {
    beforeEach(() => component = new KonectMatrixTranspose());

    it('Should throw an error because no matrix is set', () => {
        expect(() => component.execute()).to.throw('No matrix available to compute her transpose.');
    });

    it('Should return an empty matrix', () => {
        component.setMatrix(new Matrix(0, 0)); 
        const matrix = component.execute();
        expect(matrix.rows).to.be.equal(0);
        expect(matrix.columns).to.be.equal(0);
    });

    it('Should return a matrix with only one value', () => {
        component.setMatrix(new Matrix([[ 10 ]]));
        const matrix = component.execute();
        expect(matrix.rows).to.be.equal(1);
        expect(matrix.columns).to.be.equal(1);

        expect(matrix.get(0, 0)).to.be.equal(10);
    });

    it('Should return a square matrix', () => {
        component.setMatrix(new Matrix([
            [ 10, 20 ],
            [ 30, 40 ]
        ]));
        const matrix = component.execute();
        expect(matrix.isSquare()).to.be.true;
        expect(matrix.rows).to.be.equal(2);
        expect(matrix.columns).to.be.equal(2);

        expect(matrix.get(0, 0)).to.be.equal(10);
        expect(matrix.get(0, 1)).to.be.equal(30);
        expect(matrix.get(1, 0)).to.be.equal(20);
        expect(matrix.get(1, 1)).to.be.equal(40);
    })
});