import { Component, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { sidebarComponent } from '../../components/Sidebar/sidebar.component';
import { ModalFormPatientComponent } from '../../components/modal-form-patient/modal-form-patient.component';
import { Patient } from '../../interfaces/patient';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { PatientsService } from '../../services/patients.service';
import { ModalViewPatientComponent } from '../../components/modal-view-patient/modal-view-patient.component';
import { IsoDateToDateFormatPipe } from "../../format-date.pipe";
import { AgePipe } from "../../age.pipe";

@Component({
    selector: 'app-medical-historys',
    standalone: true,
    templateUrl: './medical-historys.component.html',
    styleUrl: './medical-historys.component.scss',
    imports: [
        HttpClientModule,
        // Components
        sidebarComponent,
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
        IsoDateToDateFormatPipe,
        AgePipe
    ]
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
          this.paginator._intl.itemsPerPageLabel = "Prontuários por página:"
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
  

  // Modal Add Patient
  openModalAddPatient() {
    this.dialog.open(ModalFormPatientComponent, {
      width: '950px',
      height: '950px',
    }).afterClosed().subscribe(() => this.getListPatients());
  }

  // Modal View Patient
  openModalViewPatient(patient: Patient) {
    this.dialog.open(ModalViewPatientComponent, {
      width: '700px',
      height: '800px',
      data: patient,
    })
  }

  //Modal Edit Patient
  openModalEditPatient(patient: Patient){
    this.dialog.open(ModalFormPatientComponent, {
      width: '950px',
      height: '950px',
      data: patient,
    }).afterClosed().subscribe(() => this.getListPatients());
  }

  // Delete Patient
  deletePatient(id: string) {
    this.patientsService.deletePatient(id).subscribe(
      (response:any) => {
        alert('Usuário excluído com Sucesso!');
        this.getListPatients();
      } 
    );
  }

}
