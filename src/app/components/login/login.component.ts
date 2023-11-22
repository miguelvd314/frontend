import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private http: HttpClient) {}

  login() {
    this.http.post<any>('http://localhost:3000/login', { username: this.username, password: this.password })
      .subscribe(
        response => {
          // Guardar el token de acceso en el almacenamiento local o en una cookie
          localStorage.setItem('token', response.token);
          console.log('Inicio de sesión exitoso');
        },
        error => {
          console.error('Error al iniciar sesión:', error.error.message);
        }
      );
  }
}
