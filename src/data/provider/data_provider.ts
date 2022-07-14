import {FirebaseDbFacade} from "../../core/firebase_db_facade";
import {DataContainer} from "../model/data_container";
import {HttpResponse} from "../model/api_response";
import {HttpMethods} from "../../constant/enums";

export class DataProvider {
    readonly container : DataContainer | undefined;

    constructor(container?: DataContainer) {
        this.container = container;
    }

    async process(): Promise<HttpResponse> {
        if (this.container == null) {
            return HttpResponse.badRequest;
        }
        switch (this.method) {
            case HttpMethods.GET:
                let response = await this.db.retrieve(this.container);
                if (response.val() != null) {
                    return HttpResponse.okWithValue(response.val());
                }
                return HttpResponse.notFound;
            case HttpMethods.POST:
                await this.db.store(this.container);
                return HttpResponse.created;
            default:
                return HttpResponse.methodNotAllowed;
        }
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