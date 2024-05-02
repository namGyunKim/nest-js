import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from '../entity/MemberEntity';
import { CreateMemberRequest } from '../payload/request/CreateMemberRequest';
import { CreateResponseGlobal } from '../../../global/payload/response/CreateResponseGlobal';

@Injectable()
export class MemberService {
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
