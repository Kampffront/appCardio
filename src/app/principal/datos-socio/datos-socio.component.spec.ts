import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosSocioComponent } from './datos-socio.component';

describe('DatosSocioComponent', () => {
  let component: DatosSocioComponent;
  let fixture: ComponentFixture<DatosSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
