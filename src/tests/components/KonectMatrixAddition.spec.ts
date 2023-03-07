import { expect } from "chai";

import KonectMatrixAddition from "../../components/component/KonectMatrixAddition";
import { Matrix } from "ml-matrix";

describe('Test the execution of the component KonectMatrixAddition', () => {
    it('Check the execution of the component without any matrices', () => {
        const component = new KonectMatrixAddition();

        expect(() => component.execute()).to.throw("Both a and b matrices must be set");
    });

    it('Check the execution of the component with only the A matrix', () => {
        const component = new KonectMatrixAddition();
        component.setMatrixA(new Matrix(10, 10));
        expect(() => component.execute()).to.throw("Both a and b matrices must be set");
    });

    it('Check the execution of the component with only the B matrix', () => {
        const component = new KonectMatrixAddition();
        component.setMatrixB(new Matrix(10, 10));
        expect(() => component.execute()).to.throw("Both a and b matrices must be set");
    });


    it('Check the execution of the component with two matrices', () => {
        const component = new KonectMatrixAddition();
        const matrix = new Matrix([
            [ 10, 10 ]
        ]);

        component.setMatrixA(matrix);
        component.setMatrixB(matrix);

        const result = component.execute();

        expect(result.columns).to.equal(2);
        expect(result.rows).to.equal(1);

        for (let row = 0; row < result.rows; ++row) {
            for (let col = 0; col < result.columns; ++col) {
                expect(result.get(row, col)).to.equal(20);
            }
        }
    });

    it('Check the execution of the component with two matrices with different size', () => {
        const component = new KonectMatrixAddition();

        component.setMatrixA(new Matrix([
            [ 10 ]
        ]));

        component.setMatrixB(new Matrix([
            [ 10, 20, 40 ]
        ]));

        expect(() => component.execute()).to.throw("The two matrices must have the same dimensions");
    });

    it('Check the execution of the component with two empty matrices', () => {
        const component = new KonectMatrixAddition();
        component.setMatrixA(new Matrix(0, 0));
        component.setMatrixB(new Matrix(0, 0));

        const result = component.execute();
        expect(result.columns).to.equal(0);
        expect(result.rows).to.equal(0);
    });
});