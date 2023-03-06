import { Component, SketchComponent } from "konect-api-types-ts";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";

@Component({
    namespace: 'Matrix',
    name: 'Matrix loader',
    icon: {
        fa: faTableCells,
        name: 'fa-table-cells'
    }
})
export class KonectMatriceLoader extends SketchComponent<void> {
    
    execute(): void {
        throw new Error("Method not implemented.");
    }
    copy(): SketchComponent<void> {
        throw new Error("Method not implemented.");
    }
    
}