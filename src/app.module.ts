import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '@/config/config.service';
import { StyleModule } from '@/style/style.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()[0]),
    forwardRef(() => StyleModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
