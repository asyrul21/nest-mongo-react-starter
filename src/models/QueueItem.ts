import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type QueueItemDocument = QueueItem & Document;

@Schema()
export class QueueItem {
  @Prop({ required: true })
  name: string;

  @Prop({})
  description: string;

  @Prop({ default: Date.now() })
  createdDate: Date;
}

export const QueueItemSchema = SchemaFactory.createForClass(QueueItem);
