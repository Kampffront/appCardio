import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosDiabetescardioComponent } from './resultados-diabetescardio.component';

describe('ResultadosDiabetescardioComponent', () => {
  let component: ResultadosDiabetescardioComponent;
  let fixture: ComponentFixture<ResultadosDiabetescardioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosDiabetescardioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosDiabetescardioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
