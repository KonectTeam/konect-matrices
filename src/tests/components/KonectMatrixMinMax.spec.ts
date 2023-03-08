import { expect } from "chai";

import KonectMatrixMinMax from "../../components/component/KonectMatrixMinMax";

import { Matrix } from 'ml-matrix';

let component: KonectMatrixMinMax;

describe('Test the execution of the component KonectMatrixMinMax', () => {
    beforeEach(() => {
        component = new KonectMatrixMinMax();
    });

    it('Should throw an exception because none matrices are set', () => {
        expect(() => component.execute()).to.throw('Both a and b matrices must be set');
    });

    it('Should throw an exception because only the first matrix is set', () => {
        component.setAMatrix(new Matrix(10, 10));
        expect(() => component.execute()).to.throw('Both a and b matrices must be set');
    });

    it('Should throw an exception because only the second matrix is set', () => {
        component.setBMatrix(new Matrix(10, 10));
        expect(() => component.execute()).to.throw('Both a and b matrices must be set');
    });

    it('Should an exception because both of the matrices have different size', () => {
        component.setAMatrix(new Matrix(10, 10));
        component.setBMatrix(new Matrix(1, 1));
        expect(() => component.execute()).to.throw('The two matrices must have the same dimensions');
    });

    it('Should return the first matrix as the minimum matrix', () => {
        component.setFunctionName('min');

        component.setAMatrix(new Matrix([[
            10, 10
        ]]));
        component.setBMatrix(new Matrix([[
            100, 200
        ]]));

        expect(component.execute()).deep.equal(new Matrix([[ 10, 10 ]]));
    });

    it('Should return the first matrix as the maximum matrix', () => {
        component.setFunctionName('max');

        component.setAMatrix(new Matrix([[
            1000, 1000
        ]]));
        component.setBMatrix(new Matrix([[
            100, 200
        ]]));

        expect(component.execute()).deep.equal(new Matrix([[ 1000, 1000 ]]));
    });

    it('Should return the second matrix as the minimum matrix', () => {
        component.setFunctionName('min');

        component.setAMatrix(new Matrix([[
            10, 10
        ]]));
        component.setBMatrix(new Matrix([[
            1, 2
        ]]));

        expect(component.execute()).deep.equal(new Matrix([[ 1, 2 ]])); 
    });

    it('Should return the second matrix as the maximum matrix', () => {
        component.setAMatrix(new Matrix([[
            10, 10
        ]]));
        component.setBMatrix(new Matrix([[
            112, 212
        ]]));

        expect(component.execute()).deep.equal(new Matrix([[ 112, 212 ]]));
    });
});