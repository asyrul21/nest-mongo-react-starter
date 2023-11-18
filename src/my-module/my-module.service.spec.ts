import { Test, TestingModule } from '@nestjs/testing';
import { MyModuleService } from './my-module.service';

describe('MyModuleService', () => {
  let service: MyModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyModuleService],
    }).compile();

    service = module.get<MyModuleService>(MyModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
