import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialPreviewComponent } from './social-preview.component';

describe('SocialPreviewComponent', () => {
  let component: SocialPreviewComponent;
  let fixture: ComponentFixture<SocialPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
