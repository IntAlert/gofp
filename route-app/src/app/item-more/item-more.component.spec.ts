import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMoreComponent } from './item-more.component';

describe('ItemMoreComponent', () => {
  let component: ItemMoreComponent;
  let fixture: ComponentFixture<ItemMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
