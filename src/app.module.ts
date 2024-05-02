import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './domain/member/entity/MemberEntity';
import { MemberService } from './domain/member/service/MemberService';
import { MemberController } from './domain/member/api/MemberController';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nestjs',
      password: '0000',
      database: 'nestjs',
      entities: [MemberEntity],
      synchronize: true, // 앱 실행 시 동기화
      dropSchema: true, // 테이블을 삭제하고 다시 생성
    }),
    TypeOrmModule.forFeature([MemberEntity]),
  ],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberService],
})
export class AppModule {}
