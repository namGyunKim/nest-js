import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from '../../models/member.entity';
import { CreateMemberRequest } from '../../dto/create-member.request';
import { CreateGlobalResponse } from '../../../../global/dto/create-global.response';

@Injectable()
export class MemberMutationService {
  constructor(
    @InjectRepository(MemberEntity)
    private memberRepository: Repository<MemberEntity>,
  ) {}

  async createMember(
    request: CreateMemberRequest,
  ): Promise<CreateGlobalResponse> {
    const newMember = this.memberRepository.create(request);
    const memberEntity = await this.memberRepository.save(newMember);
    return new CreateGlobalResponse(memberEntity.id);
  }
}
