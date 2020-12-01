import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeroFormComponent } from './primero-form.component';

describe('PrimeroFormComponent', () => {
  let component: PrimeroFormComponent;
  let fixture: ComponentFixture<PrimeroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeroFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
