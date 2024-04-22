import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Patient } from '../interfaces/patient';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private url = `${environment.api}/patients`;

  
  constructor(private httpClient: HttpClient) { }

  getAllpatients(){
    return this.httpClient.get<Patient[]>(this.url)
  }

  getPatient() {
    return this.httpClient.get(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  setPatient(patient: Patient){
    return this.httpClient.post<Patient>(this.url, patient)
  }

  updatePatient(id: string,patient: Patient){
    return this.httpClient.put<Patient>(`${this.url}/${id}`,patient)
  }

  deletePatient(id: string){
    return this.httpClient.delete<void>(`${this.url}/${id}`)
  }
}
