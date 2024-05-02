import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberEntity } from '../entity/MemberEntity';
import { CreateMemberRequest } from '../payload/request/CreateMemberRequest';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberEntity)
    private memberRepository: Repository<MemberEntity>,
  ) {}

  async createMember(request: CreateMemberRequest): Promise<number> {
    const newMember = this.memberRepository.create(request);
    const memberEntityPromise = this.memberRepository.save(newMember);
    return (await memberEntityPromise).id;
  }
}
