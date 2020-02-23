import { Module } from '@nestjs/common';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.service';
import { AreaModule } from 'src/area/area.module';
import { AreaService } from 'src/area/area.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from 'src/entity/area.zd';

@Module({
  imports:[
    TypeOrmModule.forFeature([Area])
  ],
  controllers: [ComponentsController],
  providers: [ComponentsService, AreaService]
})
export class ComponentsModule {}
