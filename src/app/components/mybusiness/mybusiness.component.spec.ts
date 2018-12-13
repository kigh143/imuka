import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybusinessComponent } from './mybusiness.component';

describe('MybusinessComponent', () => {
  let component: MybusinessComponent;
  let fixture: ComponentFixture<MybusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
