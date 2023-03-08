import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Component, Entry, SketchComponent, SketchWrapper } from "konect-api-types-ts";

import { Matrix } from 'ml-matrix';

@Component({
    namespace: 'Matrix',
    name: 'Matrix subtraction',
    icon: {
        fa: faPlus,
        name: 'fa-plus'
    },
    returnType: Matrix
})
export default class KonectMatrixSub extends SketchComponent<Matrix> {
    
    private _aWrapper: SketchWrapper<Matrix>;

    private _bWrapper: SketchWrapper<Matrix>;

    constructor() {
        super();
        this._aWrapper = new SketchWrapper<Matrix>();
        this._bWrapper = new SketchWrapper<Matrix>();
    }

    get aWrapper() {
        return this._aWrapper;
    }

    get bWrapper() {
        return this._bWrapper;
    }

    @Entry("a", Matrix)
    setMatrixA(matrix: Matrix) {
        this.aWrapper.setData(matrix);
    }

    @Entry("b", Matrix)
    setMatrixB(matrix: Matrix) {
        this.bWrapper.setData(matrix);
    }

    execute(): Matrix {
        if (!this.aWrapper.isDataAvailable() || !this.bWrapper.isDataAvailable()) {
            throw 'Both a and b matrices must be set';
        }

        const aMatrix = this.aWrapper.getData() as Matrix;
        const bMatrix = this.bWrapper.getData() as Matrix;

        if (bMatrix.size !== aMatrix.size) {
            throw 'The two matrices must have the same dimensions';
        }

        return aMatrix.sub(bMatrix);
    }

    copy(): SketchComponent<Matrix> {
        const component = new KonectMatrixSub();
        if (this.aWrapper.isDataAvailable()) {
            const matrix = this.aWrapper.getData() as Matrix;
            component.aWrapper.setData(new Matrix(matrix));
        }

        if (this.bWrapper.isDataAvailable()) {
            const matrix = this.bWrapper.getData() as Matrix;
            component.bWrapper.setData(new Matrix(matrix));
        }

        return component;
    }
}