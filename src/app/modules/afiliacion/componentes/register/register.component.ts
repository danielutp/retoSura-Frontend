import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../interfaces/Persona';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CausantesService } from '../../servicios/causantes.service';
import { Causante } from '../../interfaces/Causante';
import { ICausante } from '../../interfaces/ICausante';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  vista: boolean;
  frmRegistro: FormGroup;
  persona: Persona;
  tipo: Boolean;

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private causanteService: CausantesService,
    private routerBeneficiario: Router
  ) {
    this.vista = false;
    this.tipo = false;
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
      this.vista = true;
      this.tipo = true;
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
    /* const { id } = this.router.snapshot.params;
    const data = this.frmRegistro.getRawValue();
    if (id) {
      this.causanteService.putActualizarPersona(id, data).subscribe();
    } else {
      const persona = this.frmRegistro.getRawValue();

      this.causanteService
        .postpersona(persona)
        .pipe(
          concatMap((data) => {
            console.log('map' + data);
            const causante: ICausante = {
              persona: {
                id: data.id!,
              },
            };
            return this.causanteService.postcausante(causante);
          })
        )
        .subscribe((ele) => console.log(ele)); */
    this.routerBeneficiario.navigate(['/beneficiario/agregar']);
  }

  cambio(data: boolean) {
    this.vista = data;
  }
}
