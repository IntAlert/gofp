import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionTermsComponent } from './competition-terms.component';

describe('CompetitionTermsComponent', () => {
  let component: CompetitionTermsComponent;
  let fixture: ComponentFixture<CompetitionTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
