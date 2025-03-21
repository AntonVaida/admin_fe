import { Controller, Post, Put, Delete, Body, Param, Get } from '@nestjs/common';
import { LayoutService } from './layouts.service';
import { Layout } from './schemas/layouts.schema';
import { CreateLayoutDto, UpdateLayoutDto } from './dto/layouts.dto';
import { CreateLayoutSwagger, UpdateLayoutSwagger, DeleteLayoutSwagger, GetAllLayoutsSwagger, GetActiveLayoutSwagger } from 'src/utils/swagger.decorators/layouts';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('layouts')
@Controller('layouts')
export class LayoutController {
  constructor(private readonly layoutService: LayoutService) {}

  @Post()
  @CreateLayoutSwagger()
  async create(@Body() layoutData: CreateLayoutDto): Promise<Layout> {
    return this.layoutService.create(layoutData);
  }

  @Put(':id')
  @UpdateLayoutSwagger()
  async update(@Param('id') id: string, @Body() layoutData: CreateLayoutDto): Promise<Layout> {
    return this.layoutService.update(id, layoutData);
  }

  @Delete(':id')
  @DeleteLayoutSwagger()
  async delete(@Param('id') id: string): Promise<{ deleted: boolean }> {
    return this.layoutService.delete(id);
  }

  @Get()
  @GetAllLayoutsSwagger()
  async getAll(): Promise<Layout[]> {
    return this.layoutService.getAll();
  }

  @Get('active')
  @GetActiveLayoutSwagger()
  async getActive(): Promise<Layout | null> {
    return this.layoutService.getActiveLayout();
  }
}
