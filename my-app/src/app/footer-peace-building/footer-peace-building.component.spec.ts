import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPeaceBuildingComponent } from './footer-peace-building.component';

describe('FooterPeaceBuildingComponent', () => {
  let component: FooterPeaceBuildingComponent;
  let fixture: ComponentFixture<FooterPeaceBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPeaceBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPeaceBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
