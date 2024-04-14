import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  })

  private usersDB = 'http://localhost:3000/users'

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) { }


  // Função realizar Login
  submitlogin() {
    
  }
  // Função realizar Cadastro
  submitRegister() {
    if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
      const user = {
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      }
      this.http.post(this.usersDB, user).subscribe((response) => {
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate([''])
      },
      (error) => {
        alert('Erro ao salvar usuário')
      })
    } else{
      alert("As Senhas não conferem!")
    }
  }




}
