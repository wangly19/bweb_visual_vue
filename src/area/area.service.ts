import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult, UpdateResult, InsertResult } from 'typeorm';
import { Area } from 'src/entity/area.zd';

@Injectable()
export class AreaService {
    constructor(
        @InjectRepository(Area)
        private readonly areaRepository: Repository<Area>
    ) {}

    /**
     * 站点表crud服务的常用操作服务数据
     */

     // 查询所有
    async findAll(params: object): Promise<Area[]>{
        return await this.areaRepository.find({ where: { ...params } })
    }

    // 删除站点
    async delete(id: number): Promise<DeleteResult> {
        return await this.areaRepository.delete(id)
    }

    // 更新站点数据
    async update(id: number, area: Area): Promise<UpdateResult> {
        return this.areaRepository.update(id,area)
    }

    // 创建站点
    async create(area: Area): Promise<InsertResult> {
        return  await  this.areaRepository.insert(area)
    }

    // 站点组件数据，Select选择器
    async findName(): Promise<Area[]> {
        return this.areaRepository.find({ select: ['id', 'name'] })
    }
}
