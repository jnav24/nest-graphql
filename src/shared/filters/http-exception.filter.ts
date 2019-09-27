import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        let message = 'Something unexpected has occurred.';

        if (!!exception.message.error) {
            message = exception.message.error;
        }

        if (typeof exception.message === 'string') {
            message = exception.message;
        }

        response.status(status).json({
            status,
            message,
            timestamp: new Date().toISOString(),
            path: request.url,
            method: request.method,
        });
    }
}
