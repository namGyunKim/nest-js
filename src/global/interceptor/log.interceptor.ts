import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const method = context.getHandler().name;
    const className = context.getClass().name;
    const req = context.switchToHttp().getRequest<Request>();
    const { method: httpMethod, url, body, params, query } = req;

    // 로그 기록 (요청 시작)
    this.logger.log(
      `${className}.${method}() - Start` +
        `\nHTTP Method: ${httpMethod} URL: ${url}` +
        `\nParams: ${JSON.stringify(params)} Query: ${JSON.stringify(query)} Body: ${JSON.stringify(body)}`,
    );

    return next.handle().pipe(
      tap(() => {
        const responseTime = Date.now() - now;
        // 로그 기록 (응답 완료)
        this.logger.log(`${className}.${method}() - End - ${responseTime}ms`);
      }),
    );
  }
}
