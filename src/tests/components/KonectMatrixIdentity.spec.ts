import KonectMatrixIdentity from "../../components/component/KonectMatrixIdentity";

import { expect } from "chai";

let component: KonectMatrixIdentity;

describe('Test the execution of the component KonectMatrixIdentity', () => {
    beforeEach(() => {
        component = new KonectMatrixIdentity();
    });

    it('Check the execution of the component with a positive dimensions', () => {
        component.setDimensions(2);

        const matrix = component.execute();

        expect(matrix.rows).to.equal(2);
        expect(matrix.columns).to.equal(2);

        for (let row = 0; row < matrix.rows; row++) {
            for (let column = 0; column < matrix.columns; column++) {
                if (row === column) {
                    expect(matrix.get(row, column)).to.equal(1);
                }
            }
        }
    });

    it('Check the execution of the component with a dimension equal to 0', () => {
        const matrix = component.execute();
        expect(matrix.rows).to.equal(0);
        expect(matrix.columns).to.equal(0);
    });

    it('Check the execution of the component with a negative dimension', () => {
        component.setDimensions(-10);
        
        expect(() => component.execute()).to.throw('The dimensions of the identity matrix must be greater than 0');
    });
});