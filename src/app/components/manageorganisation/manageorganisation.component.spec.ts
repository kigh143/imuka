import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageorganisationComponent } from './manageorganisation.component';

describe('ManageorganisationComponent', () => {
  let component: ManageorganisationComponent;
  let fixture: ComponentFixture<ManageorganisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageorganisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
