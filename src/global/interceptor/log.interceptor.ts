import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express'; // Express 타입 사용

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const method = context.getHandler().name;
    const className = context.getClass().name;
    const req = context.switchToHttp().getRequest<Request>(); // HTTP 요청 객체 가져오기
    const { method: httpMethod, url, body, params, query } = req; // 요청에서 필요한 정보 추출

    return next.handle().pipe(
      tap(() => {
        const responseTime = Date.now() - now;
        this.logger.log(
          `${className}.${method}() - ${responseTime}ms` +
            `\nHTTP Method: ${httpMethod} URL: ${url}` +
            `\nParams: ${JSON.stringify(params)} Query: ${JSON.stringify(query)} Body: ${JSON.stringify(body)}`,
        );
      }),
    );
  }
}
