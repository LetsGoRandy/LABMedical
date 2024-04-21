import { Component } from '@angular/core';
// Angular Material
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
// Components
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { sidebarComponent } from '../../components/Sidebar/sidebar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MedicalHistorysComponent } from "../medical-historys/medical-historys.component";
import { CardPatientsComponent } from '../../components/card-patients/card-patients.component';


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
  userName: string = 'João Gomes'
  numberPatients: string = '10'
  numberAppointment: string = '8'
  numberExamination: string = '5'
  patientsService: any;
  listPatients: any;

 
}
