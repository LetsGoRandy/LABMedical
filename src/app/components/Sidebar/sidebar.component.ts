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
  Userlogged: any;

  ngOnInit() {
    // Chama LOCALSTORAGE
    const usuariosCadastradosJSON = localStorage.getItem('usuariosCadastrados');
    if (usuariosCadastradosJSON) {
      const usuariosCadastrados = JSON.parse(usuariosCadastradosJSON);
      if (usuariosCadastrados.auth === 'logged') {
        this.Userlogged = usuariosCadastrados;
      }
    }
  }

  sideNavCollapsed = signal(false)
  @Input() set collapsed(val: boolean) {
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
      route: ''
    },
  ])
  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100')


  submitLogout() {
    const userlogged = this.Userlogged;

    if (userlogged.auth === "logged") {
      userlogged.auth = '';
      localStorage.setItem('usuariosCadastrados', JSON.stringify(userlogged));
      alert("Usuário deslogado com sucesso!");
    } else {
      alert("Nenhum usuário logado encontrado.");
    }
  }


}
