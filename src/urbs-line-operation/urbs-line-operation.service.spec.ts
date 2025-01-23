import { Test, TestingModule } from '@nestjs/testing';
import { UrbsLineOperationService } from './urbs-line-operation.service';

describe('UrbsLineOperationService', () => {
  let service: UrbsLineOperationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrbsLineOperationService],
    }).compile();

    service = module.get<UrbsLineOperationService>(UrbsLineOperationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
