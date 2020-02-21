import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'id' })
  id: number;

  @Column()
  @ApiProperty({ description: '账号' })
  user: string;

  @Column()
  @ApiProperty({ description: '姓名' })
  name: string;

  @Column()
  @ApiProperty({ description: '密码' })
  password: string;
}