import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinoviceComponent } from './einovice.component';

describe('EinoviceComponent', () => {
  let component: EinoviceComponent;
  let fixture: ComponentFixture<EinoviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinoviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinoviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
