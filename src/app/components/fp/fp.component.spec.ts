import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpComponent } from './fp.component';

describe('FpComponent', () => {
  let component: FpComponent;
  let fixture: ComponentFixture<FpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
