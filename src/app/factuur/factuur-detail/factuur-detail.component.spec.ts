import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactuurDetailComponent } from './factuur-detail.component';

describe('FactuurDetailComponent', () => {
  let component: FactuurDetailComponent;
  let fixture: ComponentFixture<FactuurDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactuurDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactuurDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
