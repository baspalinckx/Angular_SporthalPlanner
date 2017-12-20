import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportshallListComponent } from './sportshall-list.component';

describe('SportshallListComponent', () => {
  let component: SportshallListComponent;
  let fixture: ComponentFixture<SportshallListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportshallListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportshallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
