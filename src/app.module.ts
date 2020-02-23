import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { ComponentsModule } from './components/components.module';
import { TheirModule } from './their/their.module';
import { AreaModule } from './area/area.module';
import config from './config/mysql'

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    DevicesModule,
    ComponentsModule,
    TheirModule,
    AreaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
