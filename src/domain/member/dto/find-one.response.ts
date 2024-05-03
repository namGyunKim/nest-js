import { MemberEntity } from '../models/member.entity';

export class FindOneResponse {
  private readonly id: number;
  private readonly name: string;
  private readonly email: string;
  constructor(entity: MemberEntity) {
    this.id = entity.id;
    this.name = entity.name;
    this.email = entity.email;
  }
}
