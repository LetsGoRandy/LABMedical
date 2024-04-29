import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateFnsModule } from '@angular/material-date-fns-adapter';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Patient } from '../../interfaces/patient';
import { Router } from '@angular/router';
import { PatientsService } from '../../services/patients.service';
import { ExamsService } from '../../services/exams.service';
import { Exame } from '../../interfaces/exame';
import moment from 'moment';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


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
  selector: 'app-new-exam',
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
    MatAutocompleteModule,
    NgxMaterialTimepickerModule,    
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
  templateUrl: './new-exam.component.html',
  styleUrl: './new-exam.component.scss'
})

export class NewExamComponent {
  formExamination: FormGroup;
  listPatients!: Patient[];


  constructor(
    private formbuild: FormBuilder,
    private router: Router,
    private patientsService: PatientsService,
    private examsService: ExamsService,
  ) {
    this.patientsService.getPatient().subscribe(res => {
      this.listPatients = res;
    })
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formExamination = this.formbuild.group({
      patientName: [null, Validators.required],
      examName: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(64)]],
      date: [moment(), Validators.required],
      time: [moment().format('LTS'), Validators.required],
      examType: [null, [Validators.minLength(4), Validators.maxLength(32)]],
      laboratory: [null, Validators.maxLength(256)],
      examUrl: [null],
      examResult: [null, [Validators.required, Validators.minLength(16), Validators.maxLength(256)]],
    })
  }

  applyFilter(event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    
    this.listPatients = this.listPatients.filter( (patient) => {
      return patient.fullName.toLocaleLowerCase().includes(value)
    })
  }

  addExamination() {
    const formExamsObj: Exame = this.formExamination.getRawValue();
    this.examsService.setExams(formExamsObj).subscribe(
      (response: any) => {
        alert('Exame agendado com sucesso!');
        this.router.navigate(['prontuarios'])
      }, (error: any) => {
        alert('Houve um erro ao salvar o exame')
        console.error(error)
      })
  }

}
