import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinprogComponent } from './joinprog.component';

describe('JoinprogComponent', () => {
  let component: JoinprogComponent;
  let fixture: ComponentFixture<JoinprogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinprogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
