import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestableBusinessComponent } from './investable-business.component';

describe('InvestableBusinessComponent', () => {
  let component: InvestableBusinessComponent;
  let fixture: ComponentFixture<InvestableBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestableBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestableBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
