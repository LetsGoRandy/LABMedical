import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registeredUsers: any[] = [];

  constructor(private router: Router) { }

  registerForm = new FormGroup({
    userNameRegister: new FormControl('', Validators.required),
    emailRegister: new FormControl('', [Validators.required, Validators.email]),
    passwordRegister: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPasswordRegister: new FormControl('',Validators.required)
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

  goToLogin() {
    this.router.navigate(['login'])
  }

}