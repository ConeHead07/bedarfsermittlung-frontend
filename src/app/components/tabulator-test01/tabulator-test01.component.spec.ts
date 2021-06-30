import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulatorTest01Component } from './tabulator-test01.component';

describe('TabulatorTest01Component', () => {
  let component: TabulatorTest01Component;
  let fixture: ComponentFixture<TabulatorTest01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabulatorTest01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabulatorTest01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
