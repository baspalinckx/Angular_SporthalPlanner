import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationStartComponent } from './reservation-start.component';

describe('ReservationStartComponent', () => {
  let component: ReservationStartComponent;
  let fixture: ComponentFixture<ReservationStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
