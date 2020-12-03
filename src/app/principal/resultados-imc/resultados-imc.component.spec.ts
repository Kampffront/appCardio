import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosImcComponent } from './resultados-imc.component';

describe('ResultadosImcComponent', () => {
  let component: ResultadosImcComponent;
  let fixture: ComponentFixture<ResultadosImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosImcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
