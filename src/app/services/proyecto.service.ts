import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'http://localhost:9000/api/proyectos/';

  constructor(private http: HttpClient) { }

  guardarProyecto(proyecto: Usuario): Observable<any> {
    return this.http.post(this.url, proyecto);
  }
}
