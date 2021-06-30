import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedarfsermittlungAuswertungenComponent } from './bedarfsermittlung-auswertungen.component';

describe('BedarfsermittlungAuswertungenComponent', () => {
  let component: BedarfsermittlungAuswertungenComponent;
  let fixture: ComponentFixture<BedarfsermittlungAuswertungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedarfsermittlungAuswertungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedarfsermittlungAuswertungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
