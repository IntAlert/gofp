import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeBuilderCompleteComponent } from './badge-builder-complete.component';

describe('BadgeBuilderCompleteComponent', () => {
  let component: BadgeBuilderCompleteComponent;
  let fixture: ComponentFixture<BadgeBuilderCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeBuilderCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeBuilderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
