import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SubItem } from './SubItem';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({ required: true })
  name: string;

  @Prop({})
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SubItem' }] })
  subItems: SubItem[];

  @Prop({ default: Date.now() })
  createdDate: Date;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
