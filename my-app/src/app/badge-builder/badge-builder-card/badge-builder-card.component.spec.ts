import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeBuilderCardComponent } from './badge-builder-card.component';

describe('BadgeBuilderCardComponent', () => {
  let component: BadgeBuilderCardComponent;
  let fixture: ComponentFixture<BadgeBuilderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeBuilderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeBuilderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
