import { Controller, Post, Body } from '@nestjs/common';
import { MemberService } from '../service/MemberService';
import { CreateMemberRequest } from '../payload/request/CreateMemberRequest';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/member')
@ApiTags('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('/create')
  @ApiOperation({ summary: '회원 가입' })
  async createMember(@Body() createMemberRequest: CreateMemberRequest) {
    return this.memberService.createMember(createMemberRequest);
  }
}
