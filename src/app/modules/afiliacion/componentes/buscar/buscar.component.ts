import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CausantesService } from '../../servicios/causantes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  @Output() state = new EventEmitter<boolean>();
  frmBuscador: FormGroup;
  constructor(
    private fb: FormBuilder,
    private causanteService: CausantesService
  ) {
    this.frmBuscador = this.fb.group({
      identificacion: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  validarPensionado() {
    this.causanteService
      .getpensionado(this.frmBuscador.get('identificacion')?.value)
      .subscribe((e) => this.state.emit(e));
  }

  validateInputs(field: string, type: string) {
    return (
      this.frmBuscador.controls?.[field].errors &&
      this.frmBuscador.controls?.[field].touched &&
      this.frmBuscador.get(field)?.hasError(type)
    );
  }
}
