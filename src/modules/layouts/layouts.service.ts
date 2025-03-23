import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Layout, LayoutDocument } from './schemas/layouts.schema';

@Injectable()
export class LayoutService {
  constructor(@InjectModel(Layout.name) private layoutModel: Model<LayoutDocument>) {}

  async create(layoutData: Partial<Layout>): Promise<Layout> {
    try {
      const newLayout = new this.layoutModel(layoutData);

      if (newLayout.isActive) {
        await this.layoutModel.updateMany({ isActive: true }, { isActive: false });
      }

      return newLayout.save();
    } catch (error) {
      throw new HttpException(`Something went wrong - ${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: string, layoutData: Partial<Layout>): Promise<Layout> {
    try {
      const updatedLayout = await this.layoutModel.findByIdAndUpdate(id, layoutData, { new: true });

      if (!updatedLayout) {
        throw new NotFoundException(`Layout with ID ${id} not found`);
      }

      return updatedLayout;
    } catch (error) {
      throw new HttpException(`Something went wrong - ${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    try {
      const result = await this.layoutModel.findByIdAndDelete(id);
      if (!result) {
        throw new NotFoundException(`Layout with ID ${id} not found`);
      }
      return { deleted: true };
    } catch (error) {
      throw new HttpException(`Something went wrong - ${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAll(): Promise<Layout[]> {
    try {
      return await this.layoutModel.find();
    } catch (error) {
      throw new HttpException(`Failed to retrieve layouts - ${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getActiveLayout(): Promise<Layout | null> {
    try {
      const activeLayout = await this.layoutModel.findOne({ isActive: true });
      if (!activeLayout) {
        throw new NotFoundException('No active layout found');
      }
      return activeLayout;
    } catch (error) {
      throw new HttpException(`Failed to retrieve active layout - ${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
