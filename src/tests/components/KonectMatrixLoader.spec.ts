import { expect } from 'chai';

import KonectMatrixLoader from '../../components/component/KonectMatrixLoader';

let component: KonectMatrixLoader;

describe('Test the execution of the component KonectMatrixLoader', () => {
    beforeEach(() => {
        component = new KonectMatrixLoader();
    });

    it('Check the execution of the component with a good string format', () => {
        component.setRawMatrix("0 10\n 20 30");
        const matrix = component.execute();

        expect(matrix.rows).to.be.equal(2);
        expect(matrix.columns).to.be.equal(2);

        expect(matrix.get(0, 0)).to.be.equal(0);
        expect(matrix.get(0, 1)).to.be.equal(10);

        expect(matrix.get(1, 0)).to.be.equal(20);
        expect(matrix.get(1, 1)).to.be.equal(30);
    });

    it('Check the execution of the component with an empty string', () => {
        const matrix = component.execute();

        expect(matrix.rows).to.be.equal(0);
        expect(matrix.columns).to.be.equal(0);
    });

    it('Should return an empty matrix because of a string includings none numeric values', () => {
        component.setRawMatrix("test\ntest");
        const matrix = component.execute();

        expect(matrix.rows).to.be.equal(0);
        expect(matrix.columns).to.be.equal(0);
    });

    it('Should return a matrix without the none numeric values', () => {
        component.setRawMatrix("10 test\ntest 60");
        const matrix = component.execute();

        expect(matrix.rows).to.be.equal(2);
        expect(matrix.columns).to.be.equal(1);
    });

    it('Should return an 2x2 matrix', () => {
        component.setRawMatrix("10 12 toto\n19 titi 16");
        const matrix = component.execute();

        expect(matrix.rows).to.be.equal(2);
        expect(matrix.columns).to.be.equal(2);

        expect(matrix.get(0, 0)).to.be.equal(10);
        expect(matrix.get(0, 1)).to.be.equal(12);

        expect(matrix.get(1, 0)).to.be.equal(19);
        expect(matrix.get(1, 1)).to.be.equal(16);
    });

    it('Should return a matrix with float values', () => {
        component.setRawMatrix("10.0 10.2 -0.2")
        const matrix = component.execute();

        expect(matrix.rows).to.be.equal(1);
        expect(matrix.columns).to.be.equal(3);

        expect(matrix.get(0, 0)).to.be.equal(10.0);
        expect(matrix.get(0, 1)).to.be.equal(10.2);
        expect(matrix.get(0, 2)).to.be.equal(-0.2);
    })
});