import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDetailResolverComponent } from './action-detail-resolver.component';

describe('ActionDetailResolverComponent', () => {
  let component: ActionDetailResolverComponent;
  let fixture: ComponentFixture<ActionDetailResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionDetailResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDetailResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
