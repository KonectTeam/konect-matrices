import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { SketchComponent, Entry, Component, SketchWrapper } from "konect-api-types-ts";

import { Matrix } from 'ml-matrix';

@Component({
    namespace: 'Matrix',
    name: 'Equation solver',
    returnType: Matrix,
    icon: {
        fa: faCalculator,
        name: 'fa-calculator',
    }
})
export default class KonectMatrixEquationSolver extends SketchComponent<Matrix> {
    
    private _matrixWrapper: SketchWrapper<Matrix>;

    constructor() {
        super();
        this._matrixWrapper = new SketchWrapper<Matrix>();
    }

    get matrixWrapper() { return this._matrixWrapper; }

    @Entry("matrix", Matrix)
    setMatrix(matrix: Matrix) {
        this.matrixWrapper.setData(matrix);
    }
    
    execute(): Matrix {
        if (!this.matrixWrapper.isDataAvailable()) {
            throw 'No matrix available to solve equations.'
        }

        const matrix = this.matrixWrapper.getData() as Matrix;

        return matrix.reducedEchelonForm();
    }

    copy(): SketchComponent<Matrix> {
        const component = new KonectMatrixEquationSolver();
        if (this.matrixWrapper.isDataAvailable()) {
            const matrix = this.matrixWrapper.getData() as Matrix;
            component.matrixWrapper.setData(matrix.clone());
        }

        return component;
    }
}