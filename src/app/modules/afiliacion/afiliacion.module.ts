import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionRoutingModule } from './afiliacion-routing.module';
import { RegisterComponent } from './componentes/register/register.component';
import { RegisterBeneficiarioComponent } from './componentes/register-beneficiario/register-beneficiario.component';
import { CausantesService } from './servicios/causantes.service';
import { CausantesComponent } from './paginas/causantes/causantes.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterBeneficiarioComponent,
    CausantesComponent,
  ],
  imports: [CommonModule, AfiliacionRoutingModule],
  exports: [
    RegisterComponent,
    RegisterBeneficiarioComponent,
    CausantesComponent,
  ],
})
export class AfiliacionModule {}
