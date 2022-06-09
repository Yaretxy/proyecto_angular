import { Component, OnInit } from '@angular/core';
import { Personas } from '../personas';
import { PersonasService } from '../personas.service';
import { Mascotas } from '../mascotas';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  persona: Personas={
    id_persona:0,
    nombre:'',
    aPaterno:'',
    aMaterno:'',
    direccion:'',
    telefono:'',
    edad:0,
  };
  constructor(private personasServices:PersonasService) { }

  ngOnInit(): void {
    /*this.personasServices.addPersonas().subscribe(res=>{
      this.persona=res;
    },
    err=>console.log(err)
    );*/
  }
  addPersonas(){
    this.personasServices.addPersonas(this.persona).subscribe(
      res =>{console.log(res);},
      err =>{console.error(err);}
    );
  }


}
