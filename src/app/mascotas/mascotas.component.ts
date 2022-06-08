import { Component, OnInit } from '@angular/core';
import {Mascotas} from '../mascotas';
import { MascotasService } from '../mascotas.service';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent implements OnInit {
  
  //dataSource!: MatTableDataSource<Mascotas>;
  mascota!:Mascotas[];
  //markers:any[] = [];
  constructor(private mascotasService: MascotasService) {
   // this.mascotasService.getMascotas().subscribe((mascota: Mascotas[] | undefined) => {
    //  this.dataSource= new MatTableDataSource(mascota);
  //  });
  }
 // displayedColumns: string[] = ['nombre', 'id','edad'];
  ngOnInit(): void {
    this.mascotasService.getMascotas().subscribe(res=>{
      this.mascota=res;
    },
     err => console.log(err)
    );
      
    }
  }

  //getMascotas(): void {
  //  this.mascotasService.getMascotas().subscribe((mascota: Mascotas[]) => {this.mascota=mascota;
//this.mascota.forEach(element => {
 // this.markers.push({
    
  /*  label: {
      color: 'red',
      text: element.nombre,
    },
    info: element.nombre,
    title: element.nombre,
  })
});


    });
    console.log(this.mascota);

  }*/



