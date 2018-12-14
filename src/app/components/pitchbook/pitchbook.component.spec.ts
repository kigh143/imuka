import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchbookComponent } from './pitchbook.component';

describe('PitchbookComponent', () => {
  let component: PitchbookComponent;
  let fixture: ComponentFixture<PitchbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
