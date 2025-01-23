import { Controller, Get, Param } from '@nestjs/common';
import { UrbsLinePointService } from './urbs-line-point.service';

@Controller('urbs-line-point')
export class UrbsLinePointController {

    constructor(private readonly urbsLinePointService: UrbsLinePointService) {}

    @Get(':lineNumber')
    async findById(@Param('lineNumber') id: string) {
        return this.urbsLinePointService.getLinePoint(id);
    }
}
