import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../interfaces/Persona';
import { BeneficiarioService } from '../../servicios/beneficiario.service';
import { IBeneficiario } from '../../interfaces/IBeneficiario';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-register-beneficiario',
  templateUrl: './register-beneficiario.component.html',
  styleUrls: ['./register-beneficiario.component.css'],
})
export class RegisterBeneficiarioComponent implements OnInit {
  frmRegistro: FormGroup;
  persona: Persona;
  constructor(
    private fb: FormBuilder,
    private beneficiarioService: BeneficiarioService
  ) {
    this.persona = {} as Persona;
    this.frmRegistro = this.fb.group({
      estudiante: ['', Validators.required],
      dependiente: ['', Validators.required],
      tipoBeneficiario: ['', Validators.required],
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

  ngOnInit(): void {}

  validateInputs(field: string, type: string) {
    return (
      this.frmRegistro.controls?.[field].errors &&
      this.frmRegistro.controls?.[field].touched &&
      this.frmRegistro.get(field)?.hasError(type)
    );
  }

  save() {
    const persona: Persona = {
      identificacion: this.frmRegistro.get('identificacion')?.value,
      tipoIdentificacion: this.frmRegistro.get('tipoIdentificacion')?.value,
      nombres: this.frmRegistro.get('nombres')?.value,
      apellidos: this.frmRegistro.get('apellidos')?.value,
      fechaNacimiento: this.frmRegistro.get('fechaNacimiento')?.value,
      genero: this.frmRegistro.get('genero')?.value,
    };

    this.beneficiarioService
      .postpersona(persona)
      .pipe(
        concatMap((data) => {
          console.log('map' + data);
          const beneficiario: IBeneficiario = {
            estudiante: this.frmRegistro.get('estudiante')?.value,
            dependiente: this.frmRegistro.get('dependiente')?.value,
            tipoBeneficiario: this.frmRegistro.get('tipoBeneficiario')?.value,
            persona: {
              id: data.id!,
            },
          };
          return this.beneficiarioService.postbeneficiario(beneficiario);
        })
      )
      .subscribe((ele) => console.log(ele));
  }
}
