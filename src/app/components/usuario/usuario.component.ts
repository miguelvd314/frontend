import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  listUsuarios: Usuario[] = [];

  constructor(private _usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    this._usuarioService.getUsuario().subscribe(data => {
      console.log(data);
      this.listUsuarios = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarUsuario(id: any){
    this._usuarioService.eliminarUsuario(id).subscribe(data => {
      this.obtenerUsuario();
    }, error => {
      console.log(error);
    })
  }

}