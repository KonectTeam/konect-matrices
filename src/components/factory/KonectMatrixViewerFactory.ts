import { Factory, SketchComponentFactory } from "konect-api-types-ts";

import KonectMatrixViewer from "@/tests/components/KonectMatrixViewer";


@Factory(KonectMatrixViewer)
export default class KonectMatrixViewerFactory implements SketchComponentFactory<KonectMatrixViewer> {
    
    fromJSON(json: object): KonectMatrixViewer {
        return new KonectMatrixViewer();
    }

    toJSON(component: KonectMatrixViewer): object {
        return {}
    }
}