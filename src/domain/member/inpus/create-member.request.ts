import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberRequest {
  @ApiProperty({ example: '홍길동', description: '이름' })
  @IsString()
  private readonly _name: string;
  @ApiProperty({ example: 'skarbs1993@naver.com', description: '이메일' })
  @IsEmail()
  private readonly _email: string;
  @ApiProperty({ example: '123456', description: '비밀번호' })
  @IsString()
  @MinLength(6)
  private _password: string;

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }
}
