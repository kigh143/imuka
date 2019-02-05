import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgloginComponent } from './orglogin.component';

describe('OrgloginComponent', () => {
  let component: OrgloginComponent;
  let fixture: ComponentFixture<OrgloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
