import { TestBed, inject } from '@angular/core/testing';

import { BadgeBuilderService } from './badge-builder.service';

describe('BadgeBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BadgeBuilderService]
    });
  });

  it('should be created', inject([BadgeBuilderService], (service: BadgeBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
