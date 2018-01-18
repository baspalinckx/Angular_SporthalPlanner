import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactuurListComponent } from './factuur-list.component';

describe('FactuurListComponent', () => {
  let component: FactuurListComponent;
  let fixture: ComponentFixture<FactuurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactuurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactuurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
