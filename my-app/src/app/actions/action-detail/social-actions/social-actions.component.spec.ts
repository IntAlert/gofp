import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialActionsComponent } from './social-actions.component';

describe('SocialActionsComponent', () => {
  let component: SocialActionsComponent;
  let fixture: ComponentFixture<SocialActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
