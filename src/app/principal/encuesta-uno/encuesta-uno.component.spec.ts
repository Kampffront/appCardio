import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaUnoComponent } from './encuesta-uno.component';

describe('EncuestaUnoComponent', () => {
  let component: EncuestaUnoComponent;
  let fixture: ComponentFixture<EncuestaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
