import { TestBed, inject } from '@angular/core/testing';

import { FloorplanService } from './floorplan.service';

describe('FloorplanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FloorplanService]
    });
  });

  it('should be created', inject([FloorplanService], (service: FloorplanService) => {
    expect(service).toBeTruthy();
  }));
});
