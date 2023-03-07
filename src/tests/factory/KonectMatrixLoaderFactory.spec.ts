import { expect } from 'chai';
import { Matrix } from 'ml-matrix';

import KonectMatrixLoader from '../../components/component/KonectMatrixLoader';

describe('Test the factory of the component KonectMatrixLoader', () => {
    it('Check the execution of the component with a good string format', () => {
        const component = new KonectMatrixLoader();
        component.setRawMatrix("0 10\n 20 30");
        const matrix = component.execute();

        expect(matrix.rows).to.equal(2);
        expect(matrix.columns).to.equal(2);

        expect(matrix.get(0, 0)).to.equal(0);
        expect(matrix.get(0, 1)).to.equal(10);

        expect(matrix.get(1, 0)).to.equal(20);
        expect(matrix.get(1, 1)).to.equal(30);
    });

    it('Check the execution of the component with an empty string', () => {
        const component = new KonectMatrixLoader();

        const matrix = component.execute();

        console.log(matrix.toString());

        expect(matrix.rows).to.equal(0);
        expect(matrix.columns).to.equal(0);
    })
})