import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from '../../models/member.entity';
import { CreateMemberRequest } from '../../inpus/create-member.request';
import { CreateGlobalResponse } from '../../../../global/dto/create-global.response';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MemberMutationService {
  constructor(
    @InjectRepository(MemberEntity)
    private memberRepository: Repository<MemberEntity>,
  ) {}

  async createMember(
    request: CreateMemberRequest,
  ): Promise<CreateGlobalResponse> {
    const saltOrRounds = 10;
    request.password = await bcrypt.hash(request.password, saltOrRounds);
    const newMember = this.memberRepository.create(request);
    const memberEntity = await this.memberRepository.save(newMember);
    return new CreateGlobalResponse(memberEntity.id);
  }
}
