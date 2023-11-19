import { Test, TestingModule } from '@nestjs/testing';
import { QueueControllerController } from './queue-controller.controller';

describe('QueueControllerController', () => {
  let controller: QueueControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueueControllerController],
    }).compile();

    controller = module.get<QueueControllerController>(QueueControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
