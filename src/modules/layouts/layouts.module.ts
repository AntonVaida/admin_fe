import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LayoutController } from './layouts.controller';
import { LayoutService } from './layouts.service';
import { Layout, LayoutSchema } from './schemas/layouts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Layout.name, schema: LayoutSchema }])
  ],
  providers: [LayoutService],
  exports: [LayoutService],
  controllers: [LayoutController],
})
export class LayoutModule {}
