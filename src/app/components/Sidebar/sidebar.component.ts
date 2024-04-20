import { Component, Input, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common'

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
    RouterModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ]
})
export class sidebarComponent {

  sideNavCollapsed = signal(false)
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val)
  };

  menuItems = signal<MenuItem[]>([
    // PAGES
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'analytics',
      label: 'Lista Prontuários',
      route: 'prontuarios'
    },
    // MODALS
    {
      icon: 'person_add_alt',
      label: 'Novo Paciente',
      route: ''
    },
    {
      icon: 'local_hospital',
      label: 'Nova Consulta',
      route: ''
    },
    {
      icon: 'medical_information',
      label: 'Novo Exame',
      route: ''
    }

  ]);

  profilePicSize = computed(()=> this.sideNavCollapsed() ? '32' : '100')
}
