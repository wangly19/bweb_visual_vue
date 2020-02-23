import { Controller, Get, Query, Put, Param, Body, Post } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { AreaService } from './area.service';
import { Area } from 'src/entity/area.zd';

@Controller('area')
@ApiTags('站点')
export class AreaController {
    constructor(private readonly areaService: AreaService){}

    @Get()
    @ApiQuery({name: 'name', required: false})
    async getAreaList(@Query() query: object) {
        const areaList = await this. areaService.findAll(query)
        return areaList
    }

    @Put(':id')
    async updateArea(
        @Param('id') id: number,
        @Body() area: Area
    ) {
        const result  =  await this.areaService.update(id, area)
        return result
    }

    @Post()
    async createArea(@Body() area: Area) {
        const res =  await this.areaService.create(area)
        return res
    }
}
