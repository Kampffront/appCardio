import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBotonesComponent } from './principal-botones.component';

describe('PrincipalBotonesComponent', () => {
  let component: PrincipalBotonesComponent;
  let fixture: ComponentFixture<PrincipalBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalBotonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
