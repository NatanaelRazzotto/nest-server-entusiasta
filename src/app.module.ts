import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicle/vehicle.module';
import { PrismaModule } from '../prisma/prisma.module';
import { OperationalVehicleModule } from './operational-vehicle/operational-vehicle.module';
import { VehicleTableUrbsModule } from './vehicle-table-urbs/vehicle-table-urbs.module';
import { UrbsVehicleScheduleModule } from './urbs-vehicle-schedule/urbs-vehicle-schedule.module';
import { UrbsLineOperationModule } from './urbs-line-operation/urbs-line-operation.module';
import { UrbsLinePointModule } from './urbs-line-point/urbs-line-point.module';

@Module({
  imports: [PrismaModule,VehicleModule, OperationalVehicleModule, VehicleTableUrbsModule, UrbsVehicleScheduleModule, UrbsLineOperationModule, UrbsLinePointModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
