import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeroListComponent } from './primero-list.component';

describe('PrimeroListComponent', () => {
  let component: PrimeroListComponent;
  let fixture: ComponentFixture<PrimeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
