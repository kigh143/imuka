import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesessionComponent } from './createsession.component';

describe('CreatesessionComponent', () => {
  let component: CreatesessionComponent;
  let fixture: ComponentFixture<CreatesessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
