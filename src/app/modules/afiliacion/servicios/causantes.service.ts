import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Causante } from '../interfaces/Causante';
import { environment } from 'src/environments/environment';
import { Persona } from '../interfaces/Persona';

@Injectable({
  providedIn: 'root',
})
export class CausantesService {
  constructor(private http: HttpClient) {}

  getcausantes(): Observable<Causante[]> {
    return this.http.get<Causante[]>(`${environment.api}listaCausante`);
  }

  getpersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${environment.api}buscarPersona/${id}`);
  }

  putActualizarPersona(id: number, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(
      `${environment.api}actualizarPersona/${id}`,
      persona
    );
  }
}
