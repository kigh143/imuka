import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedEventComponent } from './shared-event.component';

describe('SharedEventComponent', () => {
  let component: SharedEventComponent;
  let fixture: ComponentFixture<SharedEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
