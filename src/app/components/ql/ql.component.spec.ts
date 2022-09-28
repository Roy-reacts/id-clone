import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlComponent } from './ql.component';

describe('QlComponent', () => {
  let component: QlComponent;
  let fixture: ComponentFixture<QlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
