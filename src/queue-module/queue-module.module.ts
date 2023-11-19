import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
// import { join } from 'path';
import { QueueControllerController } from './queue-controller.controller';
import { QueueModuleService } from './queue-module.service';
import { QueueProcessor } from './queue.processor';
import { MongooseModule } from '@nestjs/mongoose';
import { QueueItem, QueueItemSchema } from 'src/models/QueueItem';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QueueItem.name, schema: QueueItemSchema },
    ]),
    BullModule.registerQueue({
      name: 'my-queue',
      //   processors: [join(__dirname, '../processors', 'queue-processor.js')],
    }),
  ],
  controllers: [QueueControllerController],
  providers: [QueueModuleService, QueueProcessor],
})
export class QueueModuleModule {}
