import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentoppComponent } from './investmentopp.component';

describe('InvestmentoppComponent', () => {
  let component: InvestmentoppComponent;
  let fixture: ComponentFixture<InvestmentoppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentoppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentoppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
