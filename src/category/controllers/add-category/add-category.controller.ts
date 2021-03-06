import { AddCategoryDto } from '@/category/dtos/add-category/add-category.dto';
import { AddCategoryService } from '@/category/services/add-category/add-category.service';
import { Category } from '@/entities/category.entity';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('category')
export class AddCategoryController {
  constructor(private readonly addCategoryService: AddCategoryService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
  })
  async addCategory(@Body() addCategoryDto: AddCategoryDto): Promise<Category> {
    return await this.addCategoryService.add(addCategoryDto);
  }
}
