import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './member/entity/MemberEntity';
import { MemberService } from './member/service/MemberService';
import { MemberController } from './member/api/MemberController';

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
      synchronize: true,
    }),
    TypeOrmModule.forFeature([MemberEntity]),
  ],
  controllers: [AppController, MemberController],
  providers: [AppService, MemberService],
})
export class AppModule {}
