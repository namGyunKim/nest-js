import { Module } from '@nestjs/common';
import { MemberController } from './memberController';
import { MemberMutationService } from './operations/mutation/memberMutationService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './models/memberEntity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberEntity])],
  controllers: [MemberController],
  providers: [MemberMutationService],
})
export class MemberModule {}
