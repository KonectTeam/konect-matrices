import { faSuperscript } from "@fortawesome/free-solid-svg-icons";
import { SketchComponent, Entry, Component, SketchWrapper } from "konect-api-types-ts";

import { Matrix } from 'ml-matrix';

@Component({
    namespace: 'Matrix',
    name: 'Matrix transpose',
    returnType: Matrix,
    icon: {
        fa: faSuperscript,
        name: 'fa-super-script'
    }
})
export default class KonectMatrixTranspose extends SketchComponent<Matrix> {

    private _matrixWrapper: SketchWrapper<Matrix>;

    constructor() {
        super();
        this._matrixWrapper = new SketchWrapper();
    }

    get matrixWrapper() { return this._matrixWrapper; }

    @Entry("matrix", Matrix)
    setMatrix(matrix: Matrix) {
        this._matrixWrapper.setData(matrix);
    }

    execute(): Matrix {
        if (!this._matrixWrapper.isDataAvailable()) {
            throw 'No matrix available to compute her transpose.';
        }

        const matrix = this._matrixWrapper.getData() as Matrix;

        return matrix.transpose();
    }

    copy(): SketchComponent<Matrix> {
        const component = new KonectMatrixTranspose();
        if (this.matrixWrapper.isDataAvailable()) {
            const matrix = this.matrixWrapper.getData() as Matrix;
            component.matrixWrapper.setData(new Matrix(matrix));
        }
        
        return component;
    }
}