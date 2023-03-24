import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionRoutingModule } from './afiliacion-routing.module';
import { RegisterComponent } from './componentes/register/register.component';
import { RegisterBeneficiarioComponent } from './componentes/register-beneficiario/register-beneficiario.component';
import { CausantesComponent } from './paginas/causantes/causantes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterBeneficiarioComponent,
    CausantesComponent,
  ],
  imports: [
    CommonModule,
    AfiliacionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegisterComponent,
    RegisterBeneficiarioComponent,
    CausantesComponent,
  ],
})
export class AfiliacionModule {}
