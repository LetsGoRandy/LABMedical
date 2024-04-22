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
  numberAppointment: string = '8'
  numberExamination: string = '5'
  listPatients: Patient[] = []
  userLogged: any;
  

  constructor(private patientsService:PatientsService){ }

  ngOnInit(): void{

    // Chama JSON SERVER
    this.patientsService.getAllpatients().subscribe((res)=>{
      this.listPatients = res;
    })

    // Chama LOCALSTORAGE
    const localData = sessionStorage.getItem('userLogged');
    if (localData != null) {
      this.userLogged = JSON.parse(localData)
    }
  }
   

 
}
