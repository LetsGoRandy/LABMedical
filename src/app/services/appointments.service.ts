import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../interfaces/appointment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private url = `${environment.api}/appointments`

  constructor(private httpClient: HttpClient) { }

  getAllAppointments() {
    return this.httpClient.get<Appointment[]>(this.url)
  }

  getAppointment() {
    return this.httpClient.get(this.url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  setAppointment(appointment: Appointment){
    return this.httpClient.post<Appointment>(this.url, appointment)
  }

  updateAppointment(id: string,appointment: Appointment){
    return this.httpClient.put<Appointment>(`${this.url}/${id}`,appointment)
  }

  deleteAppointment(id: string){
    return this.httpClient.delete<void>(`${this.url}/${id}`)
  }
}
