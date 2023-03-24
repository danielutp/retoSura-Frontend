import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../interfaces/Persona';
import { ActivatedRoute } from '@angular/router';
import { CausantesService } from '../../servicios/causantes.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  frmRegistro: FormGroup;
  persona: Persona;
  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private causanteService: CausantesService
  ) {
    this.persona = {} as Persona;
    this.frmRegistro = this.fb.group({
      identificacion: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
      tipoIdentificacion: ['', Validators.required],
      nombres: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
      apellidos: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    const { id } = this.router.snapshot.params;
    if (id) {
      this.causanteService.getpersona(id).subscribe((ele: Persona) => {
        this.frmRegistro.patchValue({
          identificacion: ele.identificacion,
          tipoIdentificacion: ele.tipoIdentificacion,
          nombres: ele.nombres,
          apellidos: ele.apellidos,
          fechaNacimiento: ele.fechaNacimiento,
          genero: ele.genero,
        });
      });
    }
  }

  validateInputs(field: string, type: string) {
    return (
      this.frmRegistro.controls?.[field].errors &&
      this.frmRegistro.controls?.[field].touched &&
      this.frmRegistro.get(field)?.hasError(type)
    );
  }

  save() {
    console.log('entro');
    /* if (this.frmRegistro.invalid) {
      return;
    } */

    const { id } = this.router.snapshot.params;
    const data = this.frmRegistro.getRawValue();
    this.causanteService.putActualizarPersona(id, data).subscribe();
  }
}
