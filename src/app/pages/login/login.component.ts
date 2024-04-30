import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  usuariosCadastrados: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    const localData = localStorage.getItem('usuariosCadastrados');
    if (localData != null) {
      this.usuariosCadastrados = JSON.parse(localData)
    }
  };

  loginForm = new FormGroup({
    emailLogin: new FormControl('',[Validators.required ,Validators.email]),
    passwordLogin: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  submitLogin() {
    const userRegistered = this.usuariosCadastrados.find(m => m.email == this.loginForm.value.emailLogin && m.password == this.loginForm.value.passwordLogin);

    if (userRegistered != undefined) {
        this.router.navigateByUrl('/dashboard');
        sessionStorage.setItem('userLogged', JSON.stringify(userRegistered));
        alert("Usuário Logado com Sucesso!");
    } else {
        alert("Dados de Login incorretos.");
    }
}

  resetPassword() {
    alert('Função em desenvolvimento!')
  }

  goToRegister(){
    this.router.navigateByUrl('/cadastro')
  }

}
