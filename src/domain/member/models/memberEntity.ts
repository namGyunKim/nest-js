import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('member') // DB 테이블 명
export class MemberEntity {
  @PrimaryGeneratedColumn({ name: 'member_id', type: 'bigint' })
  id: number; // 'bigint' 타입의 'member_id' 컬럼으로 생성됩니다.

  @Column({ length: 100 })
  name: string; // 'name' 컬럼, 최대 길이 100

  @Column({ length: 200 })
  email: string; // 고유한 'email' 컬럼, 최대 길이 200

  @Column({ length: 200 })
  password: string; // 'password' 컬럼, 최대 길이 200
}
