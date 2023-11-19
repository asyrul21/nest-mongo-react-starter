import { Process, Processor } from '@nestjs/bull';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from 'bull';
import { Model } from 'mongoose';
import { QueueItem, QueueItemDocument } from 'src/models/QueueItem';

@Processor('my-queue')
export class QueueProcessor {
  constructor(
    @InjectModel(QueueItem.name)
    private QueueItemModel: Model<QueueItemDocument>,
  ) {}

  @Process('my-job')
  async handleQueueItem(job: Job) {
    console.log('Start transcoding...');
    console.log(job);

    try {
      const NewQueueItem = new this.QueueItemModel({
        name: job.data.test,
        description: job.data.desc || '',
        createdDate: job.data.created as Date,
      });
      const res = await NewQueueItem.save();
      console.log('res:', res);
    } catch (error) {
      console.error('Error Processing Queue Item with data:', job.data);
      console.error(error);
    }
  }
}
