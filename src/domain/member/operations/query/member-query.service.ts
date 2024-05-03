import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../../models/member.entity';
import { Repository } from 'typeorm';
import { FindOneResponse } from '../../dto/find-one.response';

@Injectable()
export class MemberQueryService {
  constructor(
    @InjectRepository(MemberEntity)
    private memberRepository: Repository<MemberEntity>,
  ) {}
  async getMemberById(id: number): Promise<FindOneResponse> {
    const entity = await this.memberRepository.findOneBy({ id });
    if (!entity) {
      throw new Error('Member not found');
    }
    return new FindOneResponse(entity);
  }
}
