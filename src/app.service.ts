import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '하핫! NestJS로 만든 API 서버입니다.';
  }
}
