import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient){
    this.loginObj = new Login();
  }

  // Função Login Usuário
  submitLogin(){ 
       
  }
}

export class Login{
  Email: string;
  password: string;

  constructor(){
    this.Email = "";
    this.password = "";
  }

}


// this.http.post('http://localhost:3000/usuarios', this.loginObj).subscribe((res:any)=>{
//       if (res.result) {
//         alert("Login realizado!");
//       } else{
//         alert(res.message)
//       }
//     })