import { Component, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MenuLateralComponent } from '../../components/menu-lateral/menu-lateral.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { PatientsService } from '../../services/patients.service';
import { Patient } from '../../interfaces/patient';
import { ModalViewPatientComponent } from './modal-view-patient/modal-view-patient.component';


import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: 'app-medical-historys',
  standalone: true,
  imports: [
    HttpClientModule,
    // Components
    MenuLateralComponent,
    ToolbarComponent,
    ModalViewPatientComponent,
    // Angular Material
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatPaginator,
    MatSortModule,
    MatSort,
    MatDialogModule,
  ],
  templateUrl: './medical-historys.component.html',
  styleUrl: './medical-historys.component.scss'
})
export class MedicalHistorysComponent {

  displayedColumns: string[] = ['id', 'fullName', 'dateOfBirth', 'phoneNumber', 'healthPlanName', 'actions'];
  dataSource: MatTableDataSource<any>;
  listPatients: Patient[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private patientsService: PatientsService,
    public dialog: MatDialog,
  ) { 
    this.dataSource = new MatTableDataSource<any>(this.listPatients)
  }

  ngOnInit() {
    this.getListPatients();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getListPatients() {
    this.patientsService.getAllpatients()
      .subscribe({
        next: (response: any) => {
          this.listPatients = response;
          this.dataSource = new MatTableDataSource<any>(this.listPatients);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.paginator._intl.itemsPerPageLabel="Prontuários por página:"
        },
        error: (err: any) => {
          console.error(err);
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // MODAL
  openModalViewPatient(patient: Patient){
    this.dialog.open(ModalViewPatientComponent, {
      width: '700px',
      height: '720px',
      data: patient

    })
  }
}
