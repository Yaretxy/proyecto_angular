import { Component, NgModule, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Mascotas } from '../mascotas';
@Component({
  selector: 'app-agregar-mascotas',
  templateUrl: './agregar-mascotas.component.html',
  styleUrls: ['./agregar-mascotas.component.css']
})
export class AgregarMascotasComponent implements OnInit {
  mascotas: Mascotas={
    id:0,
    nombre:'',
    edad:'',
    raza:'',
    color:'',
    sexo:'',
    estado:'',
    id_vacunas:0,
    imagen:'',
  };

  constructor(private mascota:MascotasService, private modalService:NgModule) { }
  public cargando=false;

  ngOnInit(): void {
  }
  addMascotas(){
    this.mascota.addMascotas(this.mascotas).subscribe(
      res =>{console.log(res);},
      err =>{console.error(err);}
    );
  }
}
