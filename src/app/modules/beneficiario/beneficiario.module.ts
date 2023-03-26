import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeneficiarioRoutingModule } from './beneficiario-routing.module';
import { RegisterBeneficiarioComponent } from './paginas/register-beneficiario/register-beneficiario.component';

@NgModule({
  declarations: [RegisterBeneficiarioComponent],
  imports: [CommonModule, BeneficiarioRoutingModule],
})
export class BeneficiarioModule {}
