import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { SketchComponent, Entry, Component, SketchWrapper } from "konect-api-types-ts";

import { Matrix } from 'ml-matrix';

import { availableMathFunction, MatrixMathFunction } from "../utils/utils";

@Component({
    namespace: 'Matrix',
    name: 'Matrix Math function',
    returnType: Matrix,
    icon: {
        name: 'fa-wave-square',
        fa: faWaveSquare
    }
})
export default class KonectMatrixMathFunction extends SketchComponent<Matrix> {

    private _functionName: MatrixMathFunction = availableMathFunction[0];

    private _matrixWrapper: SketchWrapper<Matrix>;

    constructor() {
        super();
        this._matrixWrapper = new SketchWrapper();
    }

    get matrixWrapper(): SketchWrapper<Matrix> { return this._matrixWrapper; }
    get functionName(): MatrixMathFunction { return this._functionName; }

    @Entry("matrix", Matrix)
    setMatrix(matrix: Matrix) {
        this.matrixWrapper.setData(matrix);
    }

    setFunctionName(functionName: MatrixMathFunction) {
        this._functionName = functionName;
    }

    execute(): Matrix {
        if (!this.matrixWrapper.isDataAvailable()) {
            throw 'No matrix available to compute mathematical function'
        }

        const matrix = this.matrixWrapper.getData() as Matrix;

        return (matrix as any)[this.functionName]();
    }

    copy(): SketchComponent<Matrix> {
        const component = new KonectMatrixMathFunction();
        component.setFunctionName(this.functionName);
        if (this.matrixWrapper.isDataAvailable()) {
            const matrix = this.matrixWrapper.getData() as Matrix;
            component.matrixWrapper.setData(new Matrix(matrix));
        }

        return component;
    }
}