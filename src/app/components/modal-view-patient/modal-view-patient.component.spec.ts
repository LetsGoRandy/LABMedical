import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewPatientComponent } from './modal-view-patient.component';

describe('ModalViewPatientComponent', () => {
  let component: ModalViewPatientComponent;
  let fixture: ComponentFixture<ModalViewPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalViewPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalViewPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
