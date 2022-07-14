export class HttpResponse {
    code: number;
    value: any;

    constructor(_code: number, _value: any) {
        this.code = _code;
        this.value = _value;
    }

    public static OkWithValue(value: any): HttpResponse {
        return new HttpResponse(200, value);
    }

    public static CreatedWithValue(value: any): HttpResponse {
        return new HttpResponse(201, value);
    }

    public static get Ok(): HttpResponse {
        return new HttpResponse(200, undefined);
    }

    public static get Created(): HttpResponse {
        return new HttpResponse(201, undefined);
    }

    public static get BadRequest(): HttpResponse {
        return new HttpResponse(400, 'Bad request');
    }

    public static get Unauthorized(): HttpResponse {
        return new HttpResponse(401, 'Unauthorized');
    }

    public static get Forbidden(): HttpResponse {
        return new HttpResponse(403, 'Forbidden');
    }

    public static get NotFound(): HttpResponse {
        return new HttpResponse(404, 'Not found')
    }

    public static get MethodNotAllowed(): HttpResponse {
        return new HttpResponse(405, 'Method not allowed')
    }

    public static get Conflict(): HttpResponse {
        return new HttpResponse(409, 'Conflict');
    }
}