import { Component, HostBinding, NgModule, OnInit } from '@angular/core';
import {Mascotas} from '../mascotas';
import { MascotasService } from '../mascotas.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
@HostBinding('class') classes='row';
  mascota!:Mascotas[];
  constructor(private mascotasService: MascotasService) {
  }

    ngOnInit(): void {
      this.mascotasService.getMascotas().subscribe(res=>{
        this.mascota=res;
      },
      err => console.log(err)
      );
      
    }

    savePersona(id_animal:number){
      console.log(id_animal);

     
    }
  }




