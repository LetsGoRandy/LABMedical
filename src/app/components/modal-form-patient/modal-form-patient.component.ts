import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import { PatientsService } from '../../services/patients.service';
import { Patient } from '../../interfaces/patient';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import moment from 'moment';

import { DateFnsModule,  DateFnsAdapter} from "@angular/material-date-fns-adapter";
import { ptBR } from "date-fns/locale";
import { MomentDateAdapter } from '@angular/material-moment-adapter';

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
  selector: 'app-modal-form-patient',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIcon,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DateFnsModule,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
  templateUrl: './modal-form-patient.component.html',
  styleUrl: './modal-form-patient.component.scss'
})
export class ModalFormPatientComponent {

  formPatient: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private patientService: PatientsService,
    public dialogref: MatDialogRef<ModalFormPatientComponent>,
    private dateAdapter: DateAdapter<Date>
  ) { this.dateAdapter.setLocale('pt-BR') }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formPatient = this.formbuilder.group({
      fullName: [null, [Validators.required, Validators.minLength(3)]],
      gender: [null, Validators.required],
      dateOfBirth: [moment(), Validators.required],
      cpf: [null, [Validators.required, Validators.minLength(11)] ],
      rg: [null, [Validators.required, Validators.minLength(5)] ],
      maritalStatus: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      countryOfBirth: [null, [Validators.required, Validators.minLength(2)] ],
      healthPlanName: [''],
      healthPlanNumber: [''],
      healthPlanVal: [moment()],
      cep: [null, [Validators.required, Validators.minLength(8)]],
      streetName: [null, Validators.required],
      streetNumber: [null, Validators.required],
      district: [null, Validators.required],
      city: [null, Validators.required],
      state: [null, Validators.required],
      addressComplement: [''],
      referencePoint: [''],
    })
  }

  closeModal() {
    this.dialogref.close();
  }

  addPatient() {
    const formPatientObj: Patient = this.formPatient.getRawValue();

    this.patientService.setPatient(formPatientObj).subscribe(
      (response: any) => {
        alert('Usuário cadastrado com sucesso!');
        this.closeModal();
      }, (error: any) => {
        alert('Houve um erro ao salvar o paciente')
        console.error(error)
      })

  }

}
