import { Module } from '@nestjs/common';
import { MyModuleControllerController } from './my-module-controller.controller';

@Module({
  controllers: [MyModuleControllerController]
})
export class MyModuleModule {}
