import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberMutationService } from './operations/mutation/member-mutation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberEntity } from './models/member.entity';
import { MemberQueryService } from './operations/query/member-query.service';

@Module({
  imports: [TypeOrmModule.forFeature([MemberEntity])],
  controllers: [MemberController],
  providers: [MemberMutationService, MemberQueryService],
})
export class MemberModule {}
