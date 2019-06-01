import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupquestionComponent } from './startupquestion.component';

describe('StartupquestionComponent', () => {
  let component: StartupquestionComponent;
  let fixture: ComponentFixture<StartupquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
