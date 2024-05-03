import { Body, Controller, Post } from '@nestjs/common';
import { MemberMutationService } from './operations/mutation/memberMutationService';
import { CreateMemberRequest } from './dto/createMemberRequest';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/member')
@ApiTags('member')
export class MemberController {
  constructor(private readonly memberService: MemberMutationService) {}

  @Post('/create')
  @ApiOperation({ summary: '회원 가입' })
  async createMember(@Body() createMemberRequest: CreateMemberRequest) {
    return this.memberService.createMember(createMemberRequest);
  }
}
