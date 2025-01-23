import { Test, TestingModule } from '@nestjs/testing';
import { UrbsLineOperationController } from './urbs-line-operation.controller';

describe('UrbsLineOperationController', () => {
  let controller: UrbsLineOperationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrbsLineOperationController],
    }).compile();

    controller = module.get<UrbsLineOperationController>(UrbsLineOperationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
