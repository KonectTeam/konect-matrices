import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { Component, SketchComponent } from "konect-api-types-ts";



import { Matrix } from 'ml-matrix';

@Component({
    namespace: 'Matrix',
    name: 'Identity matrix',
    icon: {
        fa: faTableCells,
        name: 'fa-table-cells'
    },
    returnType: Matrix
})
export default class KonectMatrixIdentity extends SketchComponent<Matrix> {
    
    private _dimensions: number = 0;

    constructor() {
        super();
    }

    get dimensions(): number { return this._dimensions; }
    
    setDimensions(dimensions: number) {
        this._dimensions = dimensions;
        console.log(this.dimensions);
    }

    execute(): Matrix {
        if (this.dimensions < 0) {
            throw 'The dimensions of the identity matrix must be greater than 0';
        }

        return Matrix.eye(this.dimensions, this.dimensions);
    }

    copy(): SketchComponent<Matrix> {
        const component = new KonectMatrixIdentity();
        component._dimensions = this.dimensions;
        return component;
    }    
}