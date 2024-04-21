import { Component } from '@angular/core';
import { Patient } from '../../interfaces/patient';
import { ModalViewPatientComponent } from '../modal-view-patient/modal-view-patient.component';
import { PatientsService } from '../../services/patients.service';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-card-patients',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './card-patients.component.html',
  styleUrl: './card-patients.component.scss'
})
export class CardPatientsComponent {
  
  listPatients: Patient[] = []

  constructor(
    private patientsService: PatientsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void{
    this.patientsService.getPatient().subscribe(res=>{
      console.log(res)
      this.listPatients = res;
    })
  }

  // Modal View Patient
  openModalViewPatient(patient: Patient) {
    this.dialog.open(ModalViewPatientComponent, {
      width: '700px',
      height: '720px',
      data: patient,
    })
  }
}
