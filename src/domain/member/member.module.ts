import { Module } from '@nestjs/common';
import { MemberController } from './MemberController';
import { MemberMutationService } from './operations/mutation/MemberMutationService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './models/MemberEntity';

@Module({
  imports: [TypeOrmModule.forFeature([MemberEntity])],
  controllers: [MemberController],
  providers: [MemberMutationService],
})
export class MemberModule {}
