import { FilterCategoryDto } from '@/category/dtos/filter-category/filter-category.dto';
import { LoadAllCategoriesService } from '@/category/services/load-all-categories/load-all-categories.service';
import { Category } from '@/entities/category.entity';
import { ResultWithPagination } from '@/shared/pagination/interfaces/result-with-pagination/result-with-pagination.interface';
import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('category')
@Controller('categories')
export class LoadAllCategoriesController {
  constructor(
    private readonly loadAllCategoriesService: LoadAllCategoriesService,
  ) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'The records were successfully searched.',
  })
  @ApiResponse({ status: 404, description: 'No records found.' })
  async loadAll(
    @Query(ValidationPipe)
    filterCategoryDto: FilterCategoryDto,
  ): Promise<ResultWithPagination<Category[]>> {
    return await this.loadAllCategoriesService.loadAllCategories(
      filterCategoryDto,
    );
  }
}
