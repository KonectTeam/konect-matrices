import { SketchComponentFactory, Factory } from "konect-api-types-ts";

import KonectMatrixEquationSolver from "../component/KonectMatrixEquationSolver";

@Factory(KonectMatrixEquationSolver)
export default class KonectMatrixEquationSolverFactory implements SketchComponentFactory<KonectMatrixEquationSolver> {
    
    fromJSON(json: object): KonectMatrixEquationSolver {
        return new KonectMatrixEquationSolver();
    }
    
    toJSON(component: KonectMatrixEquationSolver): object {
        return {}
    }
}