import { TestBed } from '@angular/core/testing';

import { ValidationClientService } from './validation-client.service';

describe('ValidationClientService', () => {
  let service: ValidationClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
