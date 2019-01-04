import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalnsComponent } from './palns.component';

describe('PalnsComponent', () => {
  let component: PalnsComponent;
  let fixture: ComponentFixture<PalnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
