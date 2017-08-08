import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeBuilderComponent } from './badge-builder.component';

describe('BadgeBuilderComponent', () => {
  let component: BadgeBuilderComponent;
  let fixture: ComponentFixture<BadgeBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
