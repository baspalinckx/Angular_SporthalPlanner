import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationWeekItemComponent } from './reservation-week-item.component';

describe('ReservationWeekItemComponent', () => {
  let component: ReservationWeekItemComponent;
  let fixture: ComponentFixture<ReservationWeekItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationWeekItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationWeekItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
