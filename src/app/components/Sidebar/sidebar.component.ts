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
export type ModalsItem = {
  icon: string;
  label: string;
  route?: string
}
export type logoutItem = {
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
  ]);

  modalsItems = signal<ModalsItem[]>([
    {
      icon: 'person_add',
      label: 'Novo Paciente',
      route: 'novopaciente'
    },
    {
      icon: 'monitor_heart',
      label: 'Nova Consulta',
      route: 'novaconsulta'
    },
    {
      icon: 'medical_services',
      label: 'Novo Exame',
      route: 'novoexame'
    }
  ])

  logoutItems = signal<logoutItem[]>([
    {
      icon: 'logout',
      label: 'Sair',
      route: 'login'
    },
  ])



  profilePicSize = computed(()=> this.sideNavCollapsed() ? '32' : '100')
}
