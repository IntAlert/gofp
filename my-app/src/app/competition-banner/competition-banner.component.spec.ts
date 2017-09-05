import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionBannerComponent } from './competition-banner.component';

describe('CompetitionBannerComponent', () => {
  let component: CompetitionBannerComponent;
  let fixture: ComponentFixture<CompetitionBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
