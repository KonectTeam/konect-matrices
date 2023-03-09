import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { SketchComponent, Component, Entry, SketchWrapper } from "konect-api-types-ts";

import { Matrix, inverse } from 'ml-matrix';

@Component({
    namespace: 'Matrix',
    name: 'Inverse matrix',
    returnType: Matrix,
    icon: {
        fa: faArrowsRotate,
        name: 'fa-arrow-rotate'
    }
})
export default class KonectMatrixInverse extends SketchComponent<Matrix> {

    private _matrixWrapper: SketchWrapper<Matrix>;

    constructor() {
        super();
        this._matrixWrapper = new SketchWrapper<Matrix>();
    }

    get matrixWrapper(): SketchWrapper<Matrix> { return this._matrixWrapper; }

    execute(): Matrix {
        if (!this.matrixWrapper.isDataAvailable()) {
            throw 'No matrix available to compute eigen values';
        }

        const matrix = this.matrixWrapper.getData() as Matrix;
        if (matrix.size === 0) {
            return new Matrix(0, 0);
        }

        return inverse(matrix);
    }

    copy(): SketchComponent<Matrix> {
        const component = new KonectMatrixInverse();

        if (this.matrixWrapper.isDataAvailable()) {
            const matrix = this.matrixWrapper.getData() as Matrix;
            component.matrixWrapper.setData(matrix.clone());
        }

        return component;
    }

    @Entry("matrix", Matrix)
    setMatrix(matrix: Matrix) {
        this.matrixWrapper.setData(matrix);
    }
} 