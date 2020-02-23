import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'id' })
  id: number;

  @Column({ type: 'varchar',  length: 12 })
  @ApiProperty({ description: '设备名称' })
  name: string;

  @Column()
  @ApiProperty({ description: '设备编码' })
  code: string;

  @Column()
  @ApiProperty({ description: '状态' })
  status: string;

  @Column()
  @ApiProperty({ description: '所在站点' })
  areaName: string
}