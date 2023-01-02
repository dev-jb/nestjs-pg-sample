export class Response {
    success: boolean;
    statusCode: number;
    message: string[] | string;
    // eslint-disable-next-line
    result: any;

    // eslint-disable-next-line
    constructor(message: string[] | string, result?: any) {
        this.message = message;
        this.result = result;
    }

    setStatusCode(statusCode: number): Response {
        this.statusCode = statusCode;
        return this;
    }

    setSuccess(success: boolean): Response {
        this.success = success;
        return this;
    }
}
