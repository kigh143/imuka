import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentRequestComponent } from './investment-request.component';

describe('InvestmentRequestComponent', () => {
  let component: InvestmentRequestComponent;
  let fixture: ComponentFixture<InvestmentRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
