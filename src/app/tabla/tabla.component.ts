import { Component, OnInit, ViewChild } from '@angular/core';
import { Mascotas } from '../mascotas';
import { MascotasService } from '../mascotas.service';
import { MascotasComponent } from '../mascotas/mascotas.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  dataSource!: MatTableDataSource<Mascotas>;
  mascota!:Mascotas[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MascotasComponent) mascotas?: Mascotas;
  constructor(private mascotasServices:MascotasService) {
    this.mascotasServices.getMascotas().subscribe(mascotas => {
      this.dataSource = new MatTableDataSource(mascotas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
   }

   selectedMascotas?: Mascotas;

  onSelect(mascota: Mascotas): void {
    this.selectedMascotas = mascota;
  }

  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'sexo','Action'];

  deleteAnimal(id_animal: number) {
    this.mascotasServices.deleteMascota(id_animal).subscribe(
      res => {
        console.log(res);
        this.getMascota();
      },
      err => { console.error(err) }
    )
  }

  getMascota(): void {
    this.mascotasServices.getMascotas().subscribe(mascotas => {
      this.dataSource = new MatTableDataSource(mascotas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
    this.getMascota();
  }

}
