import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Patient } from '../interfaces/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private url = `${environment.api}/patients`;

  
  constructor(private httpClient: HttpClient) { }

  getAllpatients(){
    return this.httpClient.get<Patient[]>(this.url)
  }

  setPatient(patient: Patient){
    return this.httpClient.post<Patient>(this.url, patient)
  }

  updatePatient(patient: Patient){
    return this.httpClient.put<Patient>(`${this.url}/${patient.id}`,patient)
  }

  deletePatient(id: number){
    return this.httpClient.delete<void>(`${this.url}/${id}`)
  }
}
