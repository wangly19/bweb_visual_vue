import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 12 })
  @ApiProperty({ description: '账号' })
  user: string;

  @Column({ type: 'varchar', length: 12 })
  @ApiProperty({ description: '姓名' })
  name: string;

  @Column({ type: 'varchar', length: 12 })
  @ApiProperty({ description: '密码' })
  password: string;

  @Column({ type: 'int', default: 1 })
  @ApiProperty({ description: '状态, 1正常, 0 锁定', required: false })
  status: number
}