import {BaseProvider} from "./base_provider";
import {HttpResponse} from "../model/api_response";
import {HttpMethods} from "../../constant/enums";

export class UsernameProvider extends BaseProvider {

    async process(): Promise<HttpResponse> {
        if (this.container == null) {
            return HttpResponse.BadRequest;
        }
        switch (this.method) {
            case HttpMethods.GET:
                return await this.get();
            case HttpMethods.POST:
                return await this.post();
            default:
                return HttpResponse.MethodNotAllowed;
        }
    }

    private async post() {
        let response = await this.get();
        if (response.code.valueOf() === 404) {
            await this.db.store(this.container!);
            return HttpResponse.Created;
        } else {
            return HttpResponse.Conflict;
        }

    }

    private async get() {
        let response = await this.db.retrieve(this.container!);
        if (response.val() != null) {
            return HttpResponse.OkWithValue(response.val());
        }
        return HttpResponse.NotFound;
    }
}