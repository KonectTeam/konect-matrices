import { Matrix } from "ml-matrix";
import { Component, Entry, SketchComponent, SketchWrapper } from "konect-api-types-ts";
import { faPlusMinus } from "@fortawesome/free-solid-svg-icons";

import { MinMaxFunc } from "../utils/utils";

@Component({
    namespace: 'Matrix',
    name: 'Min/Max matrix',
    returnType: Matrix,
    icon: {
        fa: faPlusMinus,
        name: 'fa-plus-minus'
    }
})
export default class KonectMatrixMinMax extends SketchComponent<Matrix> {

    private _aWrapper: SketchWrapper<Matrix>;

    private _bWrapper: SketchWrapper<Matrix>;

    private _functionName: MinMaxFunc = 'max';

    constructor() {
        super();
        this._aWrapper = new SketchWrapper<Matrix>();
        this._bWrapper = new SketchWrapper<Matrix>();
    }

    get aWrapper(): SketchWrapper<Matrix> { return this._aWrapper }
    get bWrapper(): SketchWrapper<Matrix> { return this._bWrapper }
    get functionName() { return this._functionName; }

    @Entry("A", Matrix)
    setAMatrix(matrix: Matrix) {
        this.aWrapper.setData(matrix);
    }

    @Entry("B", Matrix)
    setBMatrix(matrix: Matrix) {
        this.bWrapper.setData(matrix);
    }

    execute(): Matrix {
        if (!this.aWrapper.isDataAvailable() || !this.bWrapper.isDataAvailable()) {
            throw 'Both a and b matrices must be set';
        }

        const aMatrix = this.aWrapper.getData() as Matrix;
        const bMatrix = this.bWrapper.getData() as Matrix;

        if (aMatrix.size !== bMatrix.size) {
            throw 'The two matrices must have the same dimensions';
        }

        return this._functionName === 'max' ? Matrix.max(aMatrix, bMatrix) : Matrix.min(aMatrix, bMatrix);;
    }

    setFunctionName(funcName: MinMaxFunc) {
        this._functionName = funcName;
    }

    copy(): SketchComponent<Matrix> {
        const component = new KonectMatrixMinMax();

        if (this.aWrapper.isDataAvailable()) {
            component.aWrapper.setData(this.aWrapper.getData());
        }

        if (this.bWrapper.isDataAvailable()) {
            component.bWrapper.setData(this.bWrapper.getData());
        }

        return component;
    }
    
}