import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIconModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class sidebarComponent {

  constructor(private router: Router) { }

  backToHome() {
    this.router.navigate(['dashboard'])
  };

  goToMedicalHistorys() {
    this.router.navigate(['prontuarios'])
  };

  newPatient() {
    alert('função em desenvolvimento')
  };

  newMedicalAppointment() {
    alert('função em desenvolvimento')
  };

  newMedicalExamination() {
    alert('função em desenvolvimento')
  };

  logout() {
    this.router.navigate(['login'])
  };

}
