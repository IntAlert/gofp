import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivityBlockComponent } from './recent-activity-block.component';

describe('RecentActivityBlockComponent', () => {
  let component: RecentActivityBlockComponent;
  let fixture: ComponentFixture<RecentActivityBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentActivityBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentActivityBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
