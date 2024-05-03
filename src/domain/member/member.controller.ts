import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MemberMutationService } from './operations/mutation/member-mutation.service';
import { CreateMemberRequest } from './inpus/create-member.request';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MemberQueryService } from './operations/query/member-query.service';

@Controller('/member')
@ApiTags('member')
export class MemberController {
  constructor(
    private readonly memberMutationService: MemberMutationService,
    private readonly memberQueryService: MemberQueryService,
  ) {}

  @Post('/create')
  @ApiOperation({ summary: '회원 가입' })
  async createMember(@Body() createMemberRequest: CreateMemberRequest) {
    return this.memberMutationService.createMember(createMemberRequest);
  }

  @Get('find-one-by-id/:id')
  @ApiOperation({ summary: '회원 조회' })
  async getMemberById(@Param('id') id: number) {
    return this.memberQueryService.getMemberById(id);
  }
}
