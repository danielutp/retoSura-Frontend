export interface Persona {
  id?: number;
  identificacion: number;
  tipoIdentificacion: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: Date;
  genero: string;
}
