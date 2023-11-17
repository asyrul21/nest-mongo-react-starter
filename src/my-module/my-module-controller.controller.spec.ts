import { Test, TestingModule } from '@nestjs/testing';
import { MyModuleControllerController } from './my-module-controller.controller';

describe('MyModuleControllerController', () => {
  let controller: MyModuleControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyModuleControllerController],
    }).compile();

    controller = module.get<MyModuleControllerController>(MyModuleControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
