import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCtaComponent } from './action-cta.component';

describe('ActionCtaComponent', () => {
  let component: ActionCtaComponent;
  let fixture: ComponentFixture<ActionCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
