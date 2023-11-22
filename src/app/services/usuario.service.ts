import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:9000/api/users/';

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUsuario(alumno: Usuario): Observable<any> {
    return this.http.post(this.url, alumno);
  }

  obtenerUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarUsuario(id:string, usuario: Usuario): Observable<any>{
    return this.http.put(this.url + id, usuario);
  }

  // guardarProyecto(alumno: Usuario): Observable<any> {
  //   return this.http.post('http://localhost:9000/api/proyectos/', alumno);
  // }
}
