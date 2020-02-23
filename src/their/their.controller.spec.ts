import { Test, TestingModule } from '@nestjs/testing';
import { TheirController } from './their.controller';

describe('Their Controller', () => {
  let controller: TheirController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TheirController],
    }).compile();

    controller = module.get<TheirController>(TheirController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
