import { Test, TestingModule } from '@nestjs/testing';
import { UrbsLinePointController } from './urbs-line-point.controller';

describe('UrbsLinePointController', () => {
  let controller: UrbsLinePointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrbsLinePointController],
    }).compile();

    controller = module.get<UrbsLinePointController>(UrbsLinePointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
