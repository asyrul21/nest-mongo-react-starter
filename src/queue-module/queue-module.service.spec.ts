import { Test, TestingModule } from '@nestjs/testing';
import { QueueModuleService } from './queue-module.service';

describe('QueueModuleService', () => {
  let service: QueueModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueueModuleService],
    }).compile();

    service = module.get<QueueModuleService>(QueueModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
