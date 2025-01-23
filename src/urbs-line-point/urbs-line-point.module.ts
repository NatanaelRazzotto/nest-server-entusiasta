import { Module } from '@nestjs/common';
import { UrbsLinePointService } from './urbs-line-point.service';
import { UrbsLinePointController } from './urbs-line-point.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';

@Module({
   imports: [PrismaModule, HttpModule],
  providers: [UrbsLinePointService],
  controllers: [UrbsLinePointController]
})
export class UrbsLinePointModule {}
