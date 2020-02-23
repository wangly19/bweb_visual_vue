import { Test, TestingModule } from '@nestjs/testing';
import { TheirService } from './their.service';

describe('TheirService', () => {
  let service: TheirService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheirService],
    }).compile();

    service = module.get<TheirService>(TheirService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
