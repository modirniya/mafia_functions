import {FirebaseDbFacade} from "../../core/firebase_db_facade";
import {DataContainer} from "../model/data_container";

export class BaseService {
    readonly container: DataContainer | undefined;

    constructor(container?: DataContainer) {
        this.container = container;
    }

    protected get method() {
        return this.container?.method;
    }

    protected get key() {
        return this.container?.key;
    }

    protected get db() {
        return FirebaseDbFacade.instance;
    }

}