import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryInputComponent } from './story-input.component';

describe('StoryInputComponent', () => {
  let component: StoryInputComponent;
  let fixture: ComponentFixture<StoryInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
