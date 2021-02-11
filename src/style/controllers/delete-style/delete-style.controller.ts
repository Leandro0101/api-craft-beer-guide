import { DeleteStyleService } from '@/style/services/delete-style/delete-style.service';
import { ReturnResponseMessageType } from '@/style/types/return-message/return-response-message.type';
import { BadRequestException, Controller, Delete, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('style')
@Controller('style')
export class DeleteStyleController {
  constructor(private readonly delteStyleService: DeleteStyleService) {}

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Style deleted with successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Style not found.',
  })
  async delete(@Param('id') id: string): Promise<ReturnResponseMessageType> {
    try {
      return await this.delteStyleService.deleteStyle(id);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
