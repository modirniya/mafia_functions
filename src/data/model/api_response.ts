export class HttpResponse {
    code: number;
    value: any;

    constructor(_code: number, _value: any) {
        this.code = _code;
        this.value = _value;
    }

    public static okWithValue(value: any): HttpResponse {
        return new HttpResponse(200, value);
    }

    public static createdWithValue(value: any): HttpResponse {
        return new HttpResponse(201, value);
    }

    public static get ok(): HttpResponse {
        return new HttpResponse(200, undefined);
    }

    public static get created(): HttpResponse {
        return new HttpResponse(201, undefined);
    }

    public static get badRequest(): HttpResponse {
        return new HttpResponse(400, 'Bad request');
    }

    public static get unauthorized(): HttpResponse {
        return new HttpResponse(401, 'Unauthorized');
    }

    public static get forbidden(): HttpResponse {
        return new HttpResponse(403, 'Forbidden');
    }

    public static get notFound(): HttpResponse {
        return new HttpResponse(404, 'Not found')
    }

    public static get methodNotAllowed(): HttpResponse {
        return new HttpResponse(405, 'Method not allowed')
    }

    public static get conflict(): HttpResponse {
        return new HttpResponse(409, 'Conflict');
    }
}