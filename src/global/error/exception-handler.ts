// src/exceptions/custom-http.exception.ts
import ErrorCode from './enums/error-code.enum';
import { HttpException } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  constructor(errorCode: ErrorCode) {
    super(
      {
        statusCode: errorCode.code,
        message: errorCode.message,
      },
      errorCode.status,
    );
  }
}
