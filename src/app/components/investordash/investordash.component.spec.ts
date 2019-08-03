import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestordashComponent } from './investordash.component';

describe('InvestordashComponent', () => {
  let component: InvestordashComponent;
  let fixture: ComponentFixture<InvestordashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestordashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestordashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
