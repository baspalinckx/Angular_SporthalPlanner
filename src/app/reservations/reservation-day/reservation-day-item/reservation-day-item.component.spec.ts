import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDayItemComponent } from './reservation-day-item.component';

describe('ReservationDayItemComponent', () => {
  let component: ReservationDayItemComponent;
  let fixture: ComponentFixture<ReservationDayItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationDayItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
