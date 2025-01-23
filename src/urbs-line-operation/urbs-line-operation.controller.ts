import { Controller, Get, Param } from '@nestjs/common';
import { UrbsLineOperationService } from './urbs-line-operation.service';

@Controller('urbs-line-operation')
export class UrbsLineOperationController {

      constructor(private readonly urbsLineOperationService: UrbsLineOperationService) {}
    
        @Get(':carNumber')
        async findById(@Param('carNumber') id: string) {
            return this.urbsLineOperationService.getLineSchedule(id);
        }
}
