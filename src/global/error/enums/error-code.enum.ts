import { HttpStatus } from '@nestjs/common';

class ErrorCode {
  static readonly CUSTOMER_NOT_FOUND = new ErrorCode(
    '0001',
    '고객을 찾을 수 없습니다.',
    HttpStatus.NOT_FOUND,
  );
  static readonly PAGE_NOT_EXIST = new ErrorCode(
    '1000',
    '페이지가 존재하지 않습니다.',
    HttpStatus.NOT_FOUND,
  );
  static readonly INTERNAL_SERVER_ERROR = new ErrorCode(
    '1001',
    '서버 오류 입니다.',
    HttpStatus.INTERNAL_SERVER_ERROR,
  );
  static readonly INVALID_INPUT_VALUE = new ErrorCode(
    '1002',
    '잘못된 요청 값 입니다.',
    HttpStatus.BAD_REQUEST,
  );
  static readonly METHOD_NOT_ALLOWED = new ErrorCode(
    '1003',
    '허용되지 않은 메소드 입니다.',
    HttpStatus.METHOD_NOT_ALLOWED,
  );
  static readonly NOT_FOUND_MEMBER = new ErrorCode(
    '2000',
    '회원을 찾을 수 없습니다.',
    HttpStatus.NOT_FOUND,
  );

  constructor(
    public readonly code: string,
    public readonly message: string,
    public readonly status: HttpStatus,
  ) {}
}

export default ErrorCode;
