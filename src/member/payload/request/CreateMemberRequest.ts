// create-user.dto.ts
import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberRequest {
  @ApiProperty({ example: '홍길동', description: '이름' })
  @IsString()
  readonly name: string;
  @ApiProperty({ example: 'skarbs1993@naver.com', description: '이메일' })
  @IsEmail()
  readonly email: string;
  @ApiProperty({ example: '123456', description: '비밀번호' })
  @IsString()
  @MinLength(6)
  readonly password: string;
}
