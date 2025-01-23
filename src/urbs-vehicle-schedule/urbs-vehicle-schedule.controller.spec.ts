import { Test, TestingModule } from '@nestjs/testing';
import { UrbsVehicleScheduleController } from './urbs-vehicle-schedule.controller';

describe('UrbsVehicleScheduleController', () => {
  let controller: UrbsVehicleScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrbsVehicleScheduleController],
    }).compile();

    controller = module.get<UrbsVehicleScheduleController>(UrbsVehicleScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
