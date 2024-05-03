import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MemberEntity } from '../../models/member.entity';
import { Repository } from 'typeorm';
import { FindOneResponse } from '../../dto/find-one.response';
import { CustomHttpException } from '../../../../global/error/exception-handler';
import ErrorCode from '../../../../global/error/enums/error-code.enum';

@Injectable()
export class MemberQueryService {
  constructor(
    @InjectRepository(MemberEntity)
    private memberRepository: Repository<MemberEntity>,
  ) {}
  async getMemberById(id: number): Promise<FindOneResponse> {
    const entity = await this.memberRepository.findOneBy({ id });
    if (!entity) {
      throw new CustomHttpException(ErrorCode.NOT_FOUND_MEMBER);
    }
    return new FindOneResponse(entity);
  }
}
