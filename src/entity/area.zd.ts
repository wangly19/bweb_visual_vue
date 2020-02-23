import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Area {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 12 })
  @ApiProperty({ description: '站点名称' })
  name: string;

  @Column({ type: 'varchar', length: 12 })
  @ApiProperty({ description: '密码' })
  password: string;


  @Column({ type: 'varchar', length: 12 })
  @ApiProperty({ description: '密码' })
  site: string;

  @Column({ type: 'text' })
  @ApiProperty({ description: '站点描述', required: false })
  desc: string;

  @Column({ type: 'varchar', default: new Date().toLocaleDateString() })
  @ApiProperty({ description: '创建时间', required: false })
  createTime: string;

}