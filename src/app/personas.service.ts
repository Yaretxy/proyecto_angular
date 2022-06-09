import { Injectable } from '@angular/core';
import { Personas } from './personas';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { catchError,map,tap,Observable, observable, of } from 'rxjs';
import { MessageService } from './mensajes.service';


@Injectable({
  providedIn: 'root'
})
@Injectable({providedIn: 'root'})
export class PersonasService {
  private personas="http://localhost:3007/personas";

  constructor(
    private messageService: MessageService,
    private http:HttpClient,) {
    
   }

  //AGREGAR Mascotas
addPersonas(personas: Personas): Observable<Personas> {
  return this.http.post<Personas>(this.personas, personas, this.httpOptions).pipe(
    tap((newPersonas: Personas) => this.log(`added personas w/ id_persona=${newPersonas.id_persona}`)),
    catchError(this.handleError<Personas>('addMascota'))
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

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
}
