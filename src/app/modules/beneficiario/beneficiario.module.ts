import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { RegisterBeneficiarioComponent } from './paginas/register-beneficiario/register-beneficiario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentaComponent } from './paginas/renta/renta.component';

@NgModule({
  declarations: [RegisterBeneficiarioComponent, RentaComponent],
  imports: [
    CommonModule,
    BeneficiarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BeneficiarioModule {}
