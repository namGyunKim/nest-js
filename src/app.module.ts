import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './domain/member/models/MemberEntity';
import { MemberModule } from './domain/member/member.module';

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
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
