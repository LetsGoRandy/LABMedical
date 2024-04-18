import { Component } from '@angular/core';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { PatientsService } from '../../services/patients.service';

@Component({
  selector: 'app-medical-historys',
  standalone: true,
  imports: [
    MenuLateralComponent,
    ToolbarComponent,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginator,
    MatPaginatorModule,
    MatSort,
    MatSortModule,
    MatIconModule,
  ],
  templateUrl: './medical-historys.component.html',
  styleUrl: './medical-historys.component.scss'
})
export class MedicalHistorysComponent {
  
  displayedColumns: string[] = ['id', 'name', 'age', 'phone', 'healthPlan', 'actions'];
  dataSource: any;

  constructor(private patientsService: PatientsService){}

  ngOnInit(){
    this.getListPatients();
  }

  getListPatients(){
    // this.patientsService.getAllpatients().subscribe({
    //   next: (response: any) => {
    //     console.log('Lista de pacientes JSON-SERVER', response);
    //   },
    //   error: (err: any) => {
    //     console.error(err);
    //   }
    // })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
