import KonectMatrixIdentity from "../component/KonectMatrixIdentity";
import { Factory, SketchComponentFactory } from "konect-api-types-ts";

interface KonectMatrixLoaderJSON {
    dimensions: number;
}

@Factory(KonectMatrixIdentity)
export default class KonectMatrixIdentityFactory implements SketchComponentFactory<KonectMatrixIdentity> {
    
    fromJSON(rawJson: object) : KonectMatrixIdentity {
        const component = new KonectMatrixIdentity();
        const json: KonectMatrixLoaderJSON = rawJson as KonectMatrixLoaderJSON;
        component.setDimensions(json.dimensions ?? 0);
        return component;

    }
    toJSON(component: KonectMatrixIdentity): object {
        const json: KonectMatrixLoaderJSON = {
            dimensions: component.dimensions ?? 0
        };

        return json;
    }
}