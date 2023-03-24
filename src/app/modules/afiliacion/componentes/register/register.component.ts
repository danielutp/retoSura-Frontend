import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  frmRegistro: FormGroup;
  constructor(private fb: FormBuilder) {
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

  ngOnInit(): void {}

  validateInputs(field: string, type: string) {
    return (
      this.frmRegistro.controls?.[field].errors &&
      this.frmRegistro.controls?.[field].touched &&
      this.frmRegistro.get(field)?.hasError(type)
    );
  }
}
