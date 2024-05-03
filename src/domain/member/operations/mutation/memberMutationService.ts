import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from '../../models/memberEntity';
import { CreateMemberRequest } from '../../dto/createMemberRequest';
import { CreateResponseGlobal } from '../../../../global/dto/createResponseGlobal';

@Injectable()
export class MemberMutationService {
  constructor(
    @InjectRepository(MemberEntity)
    private memberRepository: Repository<MemberEntity>,
  ) {}

  async createMember(
    request: CreateMemberRequest,
  ): Promise<CreateResponseGlobal> {
    const newMember = this.memberRepository.create(request);
    const memberEntity = await this.memberRepository.save(newMember);
    return new CreateResponseGlobal(memberEntity.id);
  }
}
