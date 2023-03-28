import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BeneficiarioService } from '../../servicios/beneficiario.service';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.css'],
})
export class RentaComponent implements OnInit {
  frmRegistro: FormGroup;
  total: number = 0;
  type: boolean = true;

  constructor(
    private fb: FormBuilder,
    private beneficiarioService: BeneficiarioService
  ) {
    this.frmRegistro = this.fb.group({
      identificacion: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
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
    this.beneficiarioService
      .getmesada(this.frmRegistro.get('identificacion')?.value)
      .subscribe((e) => this.calcularMesada(e.salario, e.mesesCotizando));
  }

  calcularMesada(salario: number, meses: number) {
    this.type = false;
    if (meses < 36) {
      this.total = salario * 0.5;
    } else if (meses > 37 && meses < 60) {
      this.total = salario * 0.75;
    } else if (meses > 60 && salario <= 1500000) {
      this.total = salario * 0.75 + meses * 2000;
    } else if (meses > 60 && salario >= 1500000) {
      this.total = salario * 0.8 + meses * 1000;
    }
  }
  volver() {
    this.type = true;
  }
}
