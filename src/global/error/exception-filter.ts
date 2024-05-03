import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { CustomHttpException } from './exception-handler';

@Catch(CustomHttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: CustomHttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus() as HttpStatus;
    const exceptionResponse = exception.getResponse() as {
      statusCode: string;
      message: string;
    };
    // 한국 시간대로 설정
    const koreaTime = new Date().toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
    });

    // 클라이언트 응답 로깅 (JSON 포맷)
    this.logger.error(
      JSON.stringify(
        {
          statusCode: status,
          timestamp: koreaTime,
          path: request.url,
          message: exceptionResponse.message,
          errorCode: exceptionResponse.statusCode,
        },
        null,
        2,
      ),
      exception.stack,
    );

    // 클라이언트에게 응답 보내기
    response.status(status).json({
      statusCode: status,
      timestamp: koreaTime,
      path: request.url,
      message: exceptionResponse.message,
      errorCode: exceptionResponse.statusCode,
    });
  }
}
