import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class QueueModuleService {
  constructor(@InjectQueue('my-queue') private sampleQueue: Queue) {}

  async addToQueue(data: any) {
    console.log('Adding to Queue!');

    await this.sampleQueue.add('my-job', {
      created: new Date(),
      ...data,
    });
  }
}
