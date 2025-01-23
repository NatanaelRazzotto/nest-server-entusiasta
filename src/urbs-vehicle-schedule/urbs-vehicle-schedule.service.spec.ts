import { Test, TestingModule } from '@nestjs/testing';
import { UrbsVehicleScheduleService } from './urbs-vehicle-schedule.service';

describe('UrbsVehicleScheduleService', () => {
  let service: UrbsVehicleScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrbsVehicleScheduleService],
    }).compile();

    service = module.get<UrbsVehicleScheduleService>(UrbsVehicleScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
