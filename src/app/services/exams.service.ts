import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Exame } from '../interfaces/exame';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  private url = `${environment.api}/examinations`;


  constructor(private httpClient: HttpClient) { }

  getAllExams() {
    return this.httpClient.get<Exame[]>(this.url)
  }

  getExams() {
    return this.httpClient.get(this.url)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  setExams(exame: Exame) {
    return this.httpClient.post<Exame>(this.url, exame)
  }

  updateExams(id: string, exame: Exame) {
    return this.httpClient.put<Exame>(`${this.url}/${id}`, exame)
  }

  deleteExams(id: string) {
    return this.httpClient.delete<void>(`${this.url}/${id}`)
  } onstructor() { }
}
