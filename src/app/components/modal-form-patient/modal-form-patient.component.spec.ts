import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormPatientComponent } from './modal-form-patient.component';

describe('ModalFormPatientComponent', () => {
  let component: ModalFormPatientComponent;
  let fixture: ComponentFixture<ModalFormPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFormPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFormPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
