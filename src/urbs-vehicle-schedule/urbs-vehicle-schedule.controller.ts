import { Controller, Get, Param } from '@nestjs/common';
import { UrbsVehicleScheduleService } from './urbs-vehicle-schedule.service';

@Controller('urbs-vehicle-schedule')
export class UrbsVehicleScheduleController {

    constructor(private readonly urbsVehicleScheduleService: UrbsVehicleScheduleService) {}

    @Get(':carNumber')
    async findById(@Param('carNumber') id: string) {
        return this.urbsVehicleScheduleService.findLoadVehicle(id,"");
    }
}
