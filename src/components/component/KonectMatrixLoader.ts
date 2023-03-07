import { Component, SketchComponent } from "konect-api-types-ts";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";

import {Matrix} from "ml-matrix";

@Component({
    namespace: 'Matrix',
    name: 'Matrix loader',
    icon: {
        fa: faTableCells,
        name: 'fa-table-cells'
    },
    returnType: Matrix
})
export default class KonectMatrixLoader extends SketchComponent<Matrix> {
    
    private _rawMatrix: string = '';

    constructor() {
        super();
    }

    setRawMatrix(rawMatrix: string) {
        this._rawMatrix = rawMatrix.trim();
    }

    get rawMatrix() { return this._rawMatrix; }

    execute(): Matrix {
        const data: Array<Array<number>> = [];

        // parse the raw matrix
        if (this.rawMatrix !== '') {
            this.rawMatrix.split(/\n/).forEach(line => {
                line = line.trim();
                const currentLine = new Array<number>();
                line.split(" ").forEach(value => currentLine.push(parseFloat(value.trim())));
                data.push(currentLine);
            });
        }
        
        const matrix = data.length > 0 ? new Matrix(data) : new Matrix(0, 0);
        return matrix;
    }


    copy(): SketchComponent<Matrix> {
        const component = new KonectMatrixLoader();
        component.setRawMatrix(this._rawMatrix);
        return component;
    } 
}