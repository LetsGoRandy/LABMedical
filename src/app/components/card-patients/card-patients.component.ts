import { Component } from '@angular/core';
import { Patient } from '../../interfaces/patient';
import { ModalViewPatientComponent } from '../modal-view-patient/modal-view-patient.component';
import { PatientsService } from '../../services/patients.service';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DatePipe } from '@angular/common';
import { AgePipe } from "../../pipes/age.pipe";

@Component({
  selector: 'app-card-patients',
  standalone: true,
  templateUrl: './card-patients.component.html',
  styleUrl: './card-patients.component.scss',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    AgePipe
  ]
})
export class CardPatientsComponent {

  listPatients: Patient[] = []

  constructor(
    private patientsService: PatientsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.patientsService.getPatient().subscribe(res => {
      // console.log(res)
      this.listPatients = res;
    })
  }

  // Modal View Patient
  openModalViewPatient(patient: Patient) {
    this.dialog.open(ModalViewPatientComponent, {
      width: '700px',
      height: '800px',
      data: patient,
    })
  }
}
