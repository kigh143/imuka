import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentopportunitiesComponent } from './investmentopportunities.component';

describe('InvestmentopportunitiesComponent', () => {
  let component: InvestmentopportunitiesComponent;
  let fixture: ComponentFixture<InvestmentopportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentopportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentopportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
