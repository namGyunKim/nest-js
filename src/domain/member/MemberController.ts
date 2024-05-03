import { Body, Controller, Post } from '@nestjs/common';
import { MemberMutationService } from './operations/mutation/MemberMutationService';
import { CreateMemberRequest } from './dto/CreateMemberRequest';
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
