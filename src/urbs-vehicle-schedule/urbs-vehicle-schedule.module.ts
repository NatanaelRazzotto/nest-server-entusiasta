import { Module } from '@nestjs/common';
import { UrbsVehicleScheduleService } from './urbs-vehicle-schedule.service';
import { UrbsVehicleScheduleController } from './urbs-vehicle-schedule.controller';
import { PrismaModule } from 'prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [PrismaModule, HttpModule],
  providers: [UrbsVehicleScheduleService],
  controllers: [UrbsVehicleScheduleController]
})
export class UrbsVehicleScheduleModule {}
