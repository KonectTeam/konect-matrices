import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SketchComponent, Entry, Component, SketchWrapper } from "konect-api-types-ts";

import { Matrix } from 'ml-matrix';

@Component({
    namespace: 'Matrix',
    name: 'Matrix product',
    returnType: Matrix,
    icon: {
        fa: faXmark,
        name: 'fa-xmark'
    }
})
export default class KonectMatrixProduct extends SketchComponent<Matrix> {

    private _aWrapper: SketchWrapper<Matrix>;

    private _bWrapper: SketchWrapper<Matrix>;

    constructor() {
        super();
        this._aWrapper = new SketchWrapper<Matrix>();
        this._bWrapper = new SketchWrapper<Matrix>();
    }

    get aWrapper() { return this._aWrapper; }
    get bWrapper() { return this._bWrapper; }

    @Entry("A", Matrix)
    setAMatrix(matrix: Matrix) {
        this.aWrapper.setData(matrix);
    }

    setBMatrix(matrix: Matrix) {
        this.bWrapper.setData(matrix);
    }

    execute(): Matrix {
        if (!this.aWrapper.isDataAvailable() || !this.bWrapper.isDataAvailable()) {
            throw 'Both of the matrices must be set to compute product';
        }

        const a = this.aWrapper.getData() as Matrix;
        const b = this.bWrapper.getData() as Matrix;

        if (a.columns !== b.rows) {
            throw 'The dimensions of the matrices are not matching to compute the product';
        }

        return a.mmul(b);
    }

    copy(): SketchComponent<Matrix> {
        const component = new KonectMatrixProduct();

        if (!this.aWrapper.isDataAvailable()) {
            const matrix = this.aWrapper.getData() as Matrix;
            component.aWrapper.setData(matrix.clone());
        }

        if (!this.bWrapper.isDataAvailable()) {
            const matrix = this.bWrapper.getData() as Matrix;
            component.bWrapper.setData(matrix.clone());
        }

        return component;
    }
}