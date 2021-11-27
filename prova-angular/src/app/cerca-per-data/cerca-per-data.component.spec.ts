import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaPerDataComponent } from './cerca-per-data.component';

describe('CercaPerDataComponent', () => {
  let component: CercaPerDataComponent;
  let fixture: ComponentFixture<CercaPerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CercaPerDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CercaPerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
