import * as admin from "firebase-admin"
import {DataContainer} from "../data/model/data_container";
import {DataSnapshot, Reference} from "@firebase/database-types";


admin.initializeApp();

export class FirebaseDbFacade {
    private static _instance: FirebaseDbFacade;
    private readonly db = admin.database();

    private constructor(isEmulator: boolean) {
        if (isEmulator) {
            this.db.useEmulator('localhost', 9001)
        }
    }

    async store(_container: DataContainer): Promise<void> {
        return await this.getReference(_container).set(_container.value);
    }

    async retrieve(_container: DataContainer): Promise<DataSnapshot> {
        return await this.getReference(_container).get();
    }

    private getReference(container: DataContainer): Reference {
        let destination = this.db.ref(container.category);
        for (let path of container.path) {
            destination = destination.child(path);
        }
        return destination.child(container.key);
    }

    public static get instance() {
        return this._instance || (this._instance = new this(true))
    }

}