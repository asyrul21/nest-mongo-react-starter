import { Module } from '@nestjs/common';
import { MyModuleControllerController } from './my-module-controller.controller';
import { MyModuleService } from './my-module.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from 'src/models/Item';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
  controllers: [MyModuleControllerController],
  providers: [MyModuleService],
})
export class MyModuleModule {}
