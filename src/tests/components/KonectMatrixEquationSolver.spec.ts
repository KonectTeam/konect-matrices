import { expect } from "chai";

import KonectMatrixEquationSolver from "../../components/component/KonectMatrixEquationSolver";

import { Matrix } from 'ml-matrix';

let component: KonectMatrixEquationSolver;

describe('Test the execution of the KonectMatrixEquationSolver component', () => {
    beforeEach(() => component = new KonectMatrixEquationSolver());

    it('Should throw an exception because no matrix is defined', () => {
        expect(() => component.execute()).to.throw('No matrix available to solve equations.');
    });

    it('Should return an empty matrix', () => {
        component.setMatrix(new Matrix(0, 0));
        const matrix = component.execute();

        expect(matrix.rows).to.be.equal(0);
        expect(matrix.columns).to.be.equal(0);
    });

    it('Should return a return a matrix with -22 and 7 as solutions', () => {
        component.setMatrix(new Matrix([
            [ 1, 3, -1 ],
            [ 0, 1, 7]
        ]));
        
        const matrix = component.execute();
        expect(matrix.columns).to.be.equal(3);
        expect(matrix.rows).to.be.equal(2);
        expect(matrix.get(0, 0)).to.be.equal(1);
        expect(matrix.get(0, 1)).to.be.equal(0);
        expect(matrix.get(0, 2)).to.be.equal(-22);

        expect(matrix.get(1, 0)).to.be.equal(0);
        expect(matrix.get(1, 1)).to.be.equal(1);     
        expect(matrix.get(1, 2)).to.be.equal(7);
    });
});