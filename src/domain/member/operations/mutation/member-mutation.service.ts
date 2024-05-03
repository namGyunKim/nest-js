import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { MemberEntity } from '../../models/member.entity';
import { CreateMemberRequest } from '../../inpus/create-member.request';
import { CreateGlobalResponse } from '../../../../global/dto/create-global.response';
import * as bcrypt from 'bcrypt';
import { CustomHttpException } from '../../../../global/error/exception-handler';
import ErrorCode from '../../../../global/error/enums/error-code.enum';

@Injectable()
export class MemberMutationService {
  constructor(
    @InjectRepository(MemberEntity)
    private memberRepository: Repository<MemberEntity>,
    private dataSource: DataSource, // DataSource를 주입받아 트랜잭션을 관리
  ) {}

  async createMember(
    request: CreateMemberRequest,
  ): Promise<CreateGlobalResponse> {
    // 트랜잭션을 위한 QueryRunner 생성
    const queryRunner = this.dataSource.createQueryRunner();

    // 데이터베이스 연결
    await queryRunner.connect();
    // 트랜잭션 시작
    await queryRunner.startTransaction();
    //  todo : 벨리데이션 체크해서 예외 추가 필요
    try {
      // 비밀번호 암호화
      const saltOrRounds = 10;
      request.password = await bcrypt.hash(request.password, saltOrRounds);

      // Member 엔티티 생성
      const newMember = queryRunner.manager.create(MemberEntity, request);
      // Member 엔티티 저장
      const memberEntity = await queryRunner.manager.save(newMember);

      // 트랜잭션 커밋
      await queryRunner.commitTransaction();

      // 저장된 Member의 ID를 반환
      return new CreateGlobalResponse(memberEntity.id);
    } catch (error) {
      // 에러 발생 시 트랜잭션 롤백
      await queryRunner.rollbackTransaction();
      new CustomHttpException(ErrorCode.INTERNAL_SERVER_ERROR);
    } finally {
      // 트랜잭션이 성공하거나 실패하면 QueryRunner 연결 해제
      await queryRunner.release();
    }
  }
}
