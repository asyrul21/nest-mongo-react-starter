import { Body, Controller, Post } from '@nestjs/common';
import { QueueModuleService } from './queue-module.service';

@Controller('/api/queue-test')
export class QueueControllerController {
  constructor(private queueService: QueueModuleService) {}

  @Post()
  async addToQueue(@Body() body: any) {
    console.log(body);
    await this.queueService.addToQueue({
      test: 'hello world',
    });
  }
}
