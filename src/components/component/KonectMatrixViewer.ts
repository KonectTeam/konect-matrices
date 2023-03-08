import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Component, Entry, SketchComponent, SketchWrapper } from "konect-api-types-ts";

import { Matrix } from 'ml-matrix';

@Component({
    namespace: 'Matrix',
    name: 'Matrix viewer',
    icon: {
        fa: faEye,
        name: 'fa-eye'
    }
})
export default class KonectMatrixViewer extends SketchComponent<void> {

    private _matrixWrapper: SketchWrapper<Matrix>;

    constructor() {
        super();
        this._matrixWrapper = new SketchWrapper();
    }

    @Entry("matrix", Matrix)
    setMatrix(matrix: Matrix) {
        this.matrixWrapper.setData(matrix);
    }

    execute(): void {
        // empty execution
    }

    get matrixWrapper(): SketchWrapper<Matrix> { return this._matrixWrapper; }

    copy(): SketchComponent<void> {
        const component = new KonectMatrixViewer();

        if (this.matrixWrapper.isDataAvailable()) {
            component.matrixWrapper.setData(this.matrixWrapper.getData());
        }

        return component;
    }
}