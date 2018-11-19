import { TestBed } from '@angular/core/testing';

import { MockClientService } from './mock-client.service';

describe('ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockClientService = TestBed.get(MockClientService);
    expect(service).toBeTruthy();
  });
});
