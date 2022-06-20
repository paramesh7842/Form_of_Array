import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomarrayComponent } from './fomarray.component';

describe('FomarrayComponent', () => {
  let component: FomarrayComponent;
  let fixture: ComponentFixture<FomarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
