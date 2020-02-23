import { Controller, Get, Query } from '@nestjs/common';
import { AreaService } from 'src/area/area.service';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { resultRes } from 'src/config/result';
import { transformKeys } from 'src/config/util';
interface IComponent {
    area: boolean, // area  => 站点下拉
}

@Controller('components')
@ApiTags('组件')
export class ComponentsController {
    constructor(private readonly areaService: AreaService) {}

    @Get()
    @ApiQuery({ name: 'area', description: '站点', required: false })
    async component(@Query() query: IComponent) {
        console.log(query)
        const components = {}
        if (query.area) {
            components['area'] =transformKeys(await this.areaService.findName())
        }
        console.log(components)
        return resultRes(1, '请求成功', {
            ...components
        })
    }
}
