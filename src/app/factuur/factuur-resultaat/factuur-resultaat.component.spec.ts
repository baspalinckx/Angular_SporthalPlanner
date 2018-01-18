import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactuurResultaatComponent } from './factuur-resultaat.component';

describe('FactuurResultaatComponent', () => {
  let component: FactuurResultaatComponent;
  let fixture: ComponentFixture<FactuurResultaatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactuurResultaatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactuurResultaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
