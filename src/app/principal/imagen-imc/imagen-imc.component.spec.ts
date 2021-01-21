import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenImcComponent } from './imagen-imc.component';

describe('ImagenImcComponent', () => {
  let component: ImagenImcComponent;
  let fixture: ComponentFixture<ImagenImcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenImcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
