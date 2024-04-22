import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    CommonModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  Userlogged: any

  ngOnInit() {
    const usuariosCadastradosJSON = localStorage.getItem('usuariosCadastrados');
    if (usuariosCadastradosJSON) {
      const usuariosCadastrados = JSON.parse(usuariosCadastradosJSON);
      if (usuariosCadastrados.auth === 'logged') {
         this.Userlogged = usuariosCadastrados;        
      } 
    } 
  }


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
