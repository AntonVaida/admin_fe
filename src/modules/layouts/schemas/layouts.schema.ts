import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LayoutDocument = Layout & Document;

@Schema({ timestamps: true })
export class Layout {
  @Prop({ type: [{ type: Object }], required: true })
  sections: object[];

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const LayoutSchema = SchemaFactory.createForClass(Layout);
