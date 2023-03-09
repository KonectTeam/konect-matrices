import { expect } from "chai";

import KonectMatrixProduct from "../../components/component/KonectMatrixProduct";

import { Matrix } from "ml-matrix";

let component: KonectMatrixProduct;

describe('Test the execution of the component KonectMatrixProduct', () => {
    beforeEach(() => {
        component = new KonectMatrixProduct();
    });


    it('Should throw an exception because no matrix is set', () => {
        expect(() => component.execute()).to.throw("Both of the matrices must be set to compute product");
    });

    it('Should throw an exception because only the A matrix is set', () => {
        expect(() => component.execute()).to.throw("Both of the matrices must be set to compute product");
    });

    it('Should throw an exception because only the B matrix is set', () => {
        expect(() => component.execute()).to.throw("Both of the matrices must be set to compute product");
    });

    it("Should an exception because the size of the two matrices don't match", () => {
        component.setAMatrix(new Matrix([
            [ 10 ]
        ]));

        component.setBMatrix(new Matrix([
            [ 10, 20 ],
            [ 20, 30 ]
        ]));

        expect(() => component.execute()).to.throw('The dimensions of the matrices are not matching to compute the product');
    });

    it('Check an empty matrix', () => {
        component.setAMatrix(new Matrix(0, 0));
        component.setBMatrix(new Matrix(0, 0));

        const result = component.execute();
        expect(result.rows).to.be.equal(0);
        expect(result.columns).to.be.equal(0);
    });


    it('Should return a matrix [ 1000, 1300 ]', () => {
        component.setAMatrix(new Matrix([
            [ 10, 20 ]
        ]));

        component.setBMatrix(new Matrix([
            [ 20, 30 ],
            [ 40, 50 ]
        ]));

        const result = component.execute();

        expect(result.rows).to.be.equal(1)
        expect(result.columns).to.be.equal(2);

        expect(result.get(0, 0)).to.be.equal(1000);
        expect(result.get(0, 1)).to.be.equal(1300);
    })
});