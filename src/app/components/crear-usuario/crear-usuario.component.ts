import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup

  titulo = 'Añadir proyecto';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: UsuarioService,
              private _proyectoService: ProyectoService,
              private aRouter: ActivatedRoute) { 
    this.usuarioForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      requisitos: ['', Validators.required],
      pago: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarUsuario() {

    const USUARIO: Usuario = {
      _id: this.usuarioForm.get('_id')?.value,
      titulo: this.usuarioForm.get('titulo')?.value,
      descripcion: this.usuarioForm.get('descripcion')?.value,
      requisitos: this.usuarioForm.get('requisitos')?.value,
      pago: this.usuarioForm.get('pago')?.value
    }

    if(this.id !== null){
      /*this._usuarioService.editarUsuario(this.id, USUARIO).subscribe(data => {
        this.toastr.success('Se edito con exito!', 'Proyecto Modificado!');
        this.router.navigate(['/usuario']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })*/
      this._proyectoService.guardarProyecto(USUARIO).subscribe(data => {
        this.toastr.success('Se aplico con exito!', 'Proyecto Aplicado!');
        this.router.navigate(['/usuario']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })
    }else{
      console.log(USUARIO);
      this._usuarioService.guardarUsuario(USUARIO).subscribe(data => {
      this.toastr.success('Se registro con exito!', 'Proyecto Registrado!');
      this.router.navigate(['/usuario']);
      }, error => {
      console.log(error);
      this.usuarioForm.reset();
    })
    }
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Aplicar a proyecto';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          /*titulo: data.titulo,
          descripcion: data.descripcion,
          requisitos: data.requisitos,
          pago: data.pago*/
          titulo: data.titulo,
          descripcion: "Miguel Villegas",
          requisitos: "17200008",
          pago: "VMT"
        })
      })
    }
  }
}
