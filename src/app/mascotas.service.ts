import { Injectable } from '@angular/core';
import { Mascotas } from './mascotas';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { catchError,map,tap,Observable, observable, of } from 'rxjs';
import { MessageService } from './mensajes.service';

@Injectable({providedIn: 'root'})
export class MascotasService {
  private mascotas="http://localhost:3007/adopciones";

  constructor(
    private messageService: MessageService,
    private http:HttpClient,
  ) { }
//OBTENER TAQUERIAS
getMascotas(): Observable<Mascotas[]> {
  this.messageService.add('MascotasService: fetched Mascotas');
  return this.http.get<Mascotas[]>(this.mascotas)
  .pipe(tap(_=>this.log('fetched Mascotas')),
    catchError(this.handleError<Mascotas[]>('getMascotas', []))
  );
}

private log(message: string) {
  this.messageService.add(`TaqueriasService: ${message}`);
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

//AGREGAR Mascotas
addMascotas(mascota: Mascotas): Observable<Mascotas> {
  return this.http.post<Mascotas>(this.mascotas, mascota, this.httpOptions).pipe(
    tap((newMascotas: Mascotas) => this.log(`added mascotas w/ id_animal=${newMascotas.id_animal}`)),
    catchError(this.handleError<Mascotas>('addMascota'))
  );
}

deleteMascota(id:number):Observable<any>{
  const url = `${this.mascotas}/${id}`;
  return this.http.delete<any>(url).pipe(
    tap(_ => this.log(`Eliminado animal con ID ${id}`)),
    catchError(this.handleError<any>(`deleteAnimal ID ${id}`))
  );
}

updateMascota(id:number, animal:Mascotas): Observable<any>{
  const url = `${this.mascotas}/${id}`;
  return this.http.put(url, animal, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${id}`)),
    catchError(this.handleError<any>('updateMascota')));
}
/*OBTENER TAQUERIAS POR ID
getTaqueria(id: number):Observable<Taquerias>{
   const url = `${this.tacolizadorURL}/${id}`;
   return this.http.get<Taquerias>(url).pipe(
     tap(_ => this.log(`fetched Taquerias id=${id}`)),
     catchError(this.handleError<Taquerias>(`getTaqueria id=${id}`))
   );
}


//EDITAR TAQUERIAS
updateTaqueria(taqueria: Taquerias): Observable<any> {
  return this.http.put(this.tacolizadorURL, taqueria, this.httpOptions).pipe(
    tap(_ => this.log(`updated taqueria id=${taqueria.id_taquerias}`)),
    catchError(this.handleError<any>('updateTaqueri'))
  );
}

//ELIMINAR TAQUERIAS
deleteTaqueria(taqueria: Taquerias | number): Observable<Taquerias> {
  const id = typeof taqueria === 'number' ? taqueria : taqueria.id_taquerias;
  const url = `${this.tacolizadorURL}/${id}`;

  return this.http.delete<Taquerias>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted taquerias id=${id}`)),
    catchError(this.handleError<Taquerias>('deleteTaqueria'))
  );
  
}

private log(message: string) {
  this.messageService.add(`TaqueriasService: ${message}`);
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // log to console instead
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}*/

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
}

