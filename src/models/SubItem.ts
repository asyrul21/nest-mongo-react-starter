import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SubItemDocument = SubItem & Document;

@Schema()
export class SubItem {
  @Prop({ required: true })
  name: string;

  @Prop({})
  description: string;

  @Prop({ default: Date.now() })
  createdDate: Date;
}

export const SubItemSchema = SchemaFactory.createForClass(SubItem);
