import { TestBed, inject } from '@angular/core/testing';

import { FloorplanProvider } from './floorplan.service';

describe('FloorplanProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FloorplanProvider]
    });
  });

  it('should be created', inject([FloorplanProvider], (service: FloorplanProvider) => {
    expect(service).toBeTruthy();
  }));
});
