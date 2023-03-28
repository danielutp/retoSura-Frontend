import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../interfaces/Persona';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBeneficiario } from '../interfaces/IBeneficiario';
import { IMesada } from '../interfaces/IMesada';

@Injectable({
  providedIn: 'root',
})
export class BeneficiarioService {
  constructor(private http: HttpClient) {}

  postpersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${environment.api}crearPersona`, persona);
  }

  postbeneficiario(beneficiario: IBeneficiario): Observable<IBeneficiario> {
    console.log(beneficiario);
    return this.http.post<IBeneficiario>(
      `${environment.api}crearBeneficiario`,
      beneficiario
    );
  }

  getmesada(id: number): Observable<IMesada> {
    return this.http.get<IMesada>(`${environment.apiM}datosPensionado/${id}`);
  }
}
