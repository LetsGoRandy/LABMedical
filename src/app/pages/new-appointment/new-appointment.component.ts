import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateFnsModule } from '@angular/material-date-fns-adapter';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Patient } from '../../interfaces/patient';
import { PatientsService } from '../../services/patients.service';
import { Observable, map, startWith } from 'rxjs';
import { Appointment } from '../../interfaces/appointment';
import { AppointmentsService } from '../../services/appointments.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';


const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-new-appointment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIcon,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DateFnsModule,
    MatAutocompleteModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.scss'
})
export class NewAppointmentComponent {
  formAppointment: FormGroup;
  listPatients!: Patient[];


  constructor(
    private formbuild: FormBuilder,
    private router: Router,
    private patientsService: PatientsService,
    private appointmentService: AppointmentsService,
  ) {
    this.patientsService.getPatient().subscribe(res => {
      this.listPatients = res;
    })
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formAppointment = this.formbuild.group({
      patientName: [null, Validators.required],
      reason: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      date: [moment(), Validators.required],
      time: [moment(), Validators.required],
      description: [null, [Validators.minLength(16), Validators.maxLength(1024)]],
      medication: [null, Validators.maxLength(256)],
      precaution: [null, [Validators.required, Validators.minLength(16), Validators.maxLength(256)]]
    })
  }

  applyFilter(event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    
    this.listPatients = this.listPatients.filter( (patient) => {
      return patient.fullName.toLocaleLowerCase().includes(value)
    })
  }

  addAppointment() {
    const formAppointmentObj: Appointment = this.formAppointment.getRawValue();
    this.appointmentService.setAppointment(formAppointmentObj).subscribe(
      (response: any) => {
        alert('Consulta realizada com sucesso!');
        this.router.navigate(['prontuarios'])
      }, (error: any) => {
        alert('Houve um erro ao salvar o paciente')
        console.error(error)
      })
  }

}
