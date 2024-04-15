import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  registeredUsers: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    const localData = localStorage.getItem('registeredUsers');
    if (localData != null) {
      this.registeredUsers = JSON.parse(localData)
    }
  };

  loginForm = new FormGroup({
    emailLogin: new FormControl(''),
    passwordLogin: new FormControl(''),
  });

  registerForm = new FormGroup({
    userNameRegister: new FormControl(''),
    emailRegister: new FormControl(''),
    passwordRegister: new FormControl(''),
    confirmPasswordRegister: new FormControl(''),
  });

  submitRegister() {
    if (this.registerForm.value.passwordRegister === this.registerForm.value.confirmPasswordRegister) {
      const user = {
        userName: this.registerForm.value.userNameRegister,
        email: this.registerForm.value.emailRegister,
        password: this.registerForm.value.passwordRegister,
        auth: "",
      }

      const localUser = localStorage.getItem('registeredUsers');
      if (localUser != null) {
        const registeredUsers = JSON.parse(localUser);
        registeredUsers.push(user);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
      } else {
        const registeredUsers = [];
        registeredUsers.push(user);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers))
      }
      alert("Cadastrado com Sucesso!")
      this.router.navigateByUrl('/login')
    } else {
      alert("As senhas não conferem!")
    }
  };

  submitLogin() {
    const userRegistered = this.registeredUsers.find(m => m.email == this.loginForm.value.emailLogin && m.password == this.loginForm.value.passwordLogin);

    if (userRegistered != undefined) {
      this.router.navigateByUrl('/dashboard')
      userRegistered.auth = 'logged'
      alert("Usuário Logado com Sucesso!")
      localStorage.setItem('registeredUsers', JSON.stringify(userRegistered))
    } else {
      alert("Dados de Login incorretos.")
    }
  };

  resetPassword() {
    alert('Função em desenvolvimento!')
}

}
