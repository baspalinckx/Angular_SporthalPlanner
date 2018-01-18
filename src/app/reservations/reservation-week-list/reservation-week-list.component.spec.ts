import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationWeekListComponent } from './reservation-week-list.component';

describe('ReservationWeekListComponent', () => {
  let component: ReservationWeekListComponent;
  let fixture: ComponentFixture<ReservationWeekListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationWeekListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationWeekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
