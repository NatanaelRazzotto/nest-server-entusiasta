import { Module } from '@nestjs/common';
import { UrbsLineOperationService } from './urbs-line-operation.service';
import { UrbsLineOperationController } from './urbs-line-operation.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';

@Module({
      imports: [PrismaModule, HttpModule],
  providers: [UrbsLineOperationService],
  controllers: [UrbsLineOperationController]
})
export class UrbsLineOperationModule {}
