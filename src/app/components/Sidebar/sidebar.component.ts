import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ]
})
export class sidebarComponent {

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'prontuarios'
    }

  ]);

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
