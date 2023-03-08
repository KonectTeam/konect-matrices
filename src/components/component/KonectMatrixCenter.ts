import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { SketchComponent, Entry, Component, SketchWrapper } from "konect-api-types-ts";

import { Matrix } from 'ml-matrix';

@Component({
    namespace: 'Matrix',
    name: 'Matrix center',
    returnType: Matrix,
    icon: {
        fa: faAlignCenter,
        name: 'fa-align-center',
    }
})
export default class KonectMatrixCenter extends SketchComponent<Matrix> {

    private _matrixWrapper: SketchWrapper<Matrix>;

    constructor() {
        super();
        this._matrixWrapper = new SketchWrapper<Matrix>();
    }

    get matrixWrapper(): SketchWrapper<Matrix> { return this._matrixWrapper; }

    @Entry("matrix", Matrix)
    setMatrix(matrix: Matrix) {
        this.matrixWrapper.setData(matrix);
    }

    execute(): Matrix {
        if (!this.matrixWrapper.isDataAvailable()) {
            throw 'No data available to center the matrix';
        }

        const matrix = this.matrixWrapper.getData() as Matrix;
        return matrix.center();
    }

    copy(): SketchComponent<Matrix> {
        const component = new KonectMatrixCenter();
        if (this.matrixWrapper.isDataAvailable()) {
            const matrix = this.matrixWrapper.getData() as Matrix;
            component.matrixWrapper.setData(matrix.clone());
        }

        return component;
    }
}
