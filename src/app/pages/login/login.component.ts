import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(6)]
  })
  
  constructor(private fb:FormBuilder){ }

  // Função Login Usuário
  submitLogin(){ 
       
  }
}



// this.http.post('http://localhost:3000/usuarios', this.loginObj).subscribe((res:any)=>{
//       if (res.result) {
//         alert("Login realizado!");
//       } else{
//         alert(res.message)
//       }
//     })