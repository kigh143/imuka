import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialpageComponent } from './initialpage.component';

describe('InitialpageComponent', () => {
  let component: InitialpageComponent;
  let fixture: ComponentFixture<InitialpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
