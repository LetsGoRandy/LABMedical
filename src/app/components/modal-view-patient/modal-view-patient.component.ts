import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Patient } from '../../interfaces/patient';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-modal-view-patient',
  standalone: true,
  imports: [
    MatIconModule,
    MatInputModule,
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
