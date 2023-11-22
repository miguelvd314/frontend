export class Usuario {
    _id: String;
    titulo: string;
    descripcion: string;
    requisitos: string;
    pago: string;

    constructor(_id:string, codigo:string, nombre:string, correo:string){
        this._id = _id;
        this.titulo = codigo;
        this.descripcion = nombre;
        this.requisitos = correo;
        this.pago = correo;
    }
}