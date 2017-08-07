import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCollectorComponent } from './email-collector.component';

describe('EmailCollectorComponent', () => {
  let component: EmailCollectorComponent;
  let fixture: ComponentFixture<EmailCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
