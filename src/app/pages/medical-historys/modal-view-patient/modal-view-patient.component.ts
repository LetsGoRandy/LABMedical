import { Component, Inject } from '@angular/core';
import { Patient } from '../../../interfaces/patient';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal-view-patient',
  standalone: true,
  imports: [
    MatIconModule,
  ],
  templateUrl: './modal-view-patient.component.html',
  styleUrl: './modal-view-patient.component.scss'
})
export class ModalViewPatientComponent {

  patientData: Patient;

  constructor(public dialogRef: MatDialogRef<ModalViewPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.patientData = data;
  }

  closeModal() {
    this.dialogRef.close();
  }

}
