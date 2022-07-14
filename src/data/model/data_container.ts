import * as functions from "firebase-functions";
import {ContainerCategory} from "../../constant/enums";

export class DataContainer {
    readonly method: string;
    readonly category: string;
    readonly path: Array<string>;
    readonly key: string;
    readonly value: any;

    private constructor(method: string, category: string, path: Array<string>, key: string, value: any) {
        this.method = method;
        this.category = category;
        this.path = path;
        this.key = key;
        this.value = value;
    }

    public static fromRequest(category: ContainerCategory, request: functions.https.Request): DataContainer | undefined {
        let key = request.header('id');
        if (key == null) return undefined
        return new DataContainer(request.method, category, [], key, request.body);
    }

}




