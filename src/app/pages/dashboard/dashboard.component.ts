import { Component } from '@angular/core';
// Angular Material
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
// Components
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { sidebarComponent } from '../../components/Sidebar/sidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CardPatientsComponent } from '../../components/card-patients/card-patients.component';
import { Patient } from '../../interfaces/patient';
import { PatientsService } from "../../../app/services/patients.service";
import { AppointmentsService } from '../../services/appointments.service';
import { ExamsService } from '../../services/exams.service';
import { Appointment } from '../../interfaces/appointment';
import { Exame } from '../../interfaces/exame';


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [
        sidebarComponent,
        ToolbarComponent,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        CardPatientsComponent
    ]
})
export class DashboardComponent {
  
  titlePage: string = 'Informarções e Estatísticas'  
  listPatients: Patient[] = [];
  listAppointments: Appointment[] = [];
  listExams: Exame[] = [];
  userLogged: any;
  

  constructor(
    private patientsService:PatientsService,
    private appointmentService: AppointmentsService,
    private examsService: ExamsService
  ){ }

  ngOnInit(): void{

    // Chama JSON SERVER
    // Pacientes
    this.patientsService.getAllpatients().subscribe((res)=>{
      this.listPatients = res;
    })
    // Consultas
    this.appointmentService.getAllAppointments().subscribe((res)=>{
      this.listAppointments = res;
    })
    // Exames
    this.examsService.getAllExams().subscribe((res)=>{
      this.listExams = res;
    })

    // Chama LOCALSTORAGE
    const localData = sessionStorage.getItem('userLogged');
    if (localData != null) {
      this.userLogged = JSON.parse(localData)
    }
  }
   

 
}
