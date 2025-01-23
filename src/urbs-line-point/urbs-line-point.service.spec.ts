import { Test, TestingModule } from '@nestjs/testing';
import { UrbsLinePointService } from './urbs-line-point.service';

describe('UrbsLinePointService', () => {
  let service: UrbsLinePointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrbsLinePointService],
    }).compile();

    service = module.get<UrbsLinePointService>(UrbsLinePointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
