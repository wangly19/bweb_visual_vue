import { Module } from '@nestjs/common';
import { TheirController } from './their.controller';
import { TheirService } from './their.service';

@Module({
  controllers: [TheirController],
  providers: [TheirService]
})
export class TheirModule {}
