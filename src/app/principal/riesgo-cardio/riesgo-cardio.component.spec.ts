import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgoCardioComponent } from './riesgo-cardio.component';

describe('RiesgoCardioComponent', () => {
  let component: RiesgoCardioComponent;
  let fixture: ComponentFixture<RiesgoCardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiesgoCardioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiesgoCardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
