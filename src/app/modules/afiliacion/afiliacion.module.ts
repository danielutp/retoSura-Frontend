import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionRoutingModule } from './afiliacion-routing.module';
import { RegisterComponent } from './componentes/register/register.component';
import { CausantesComponent } from './paginas/causantes/causantes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarComponent } from './componentes/buscar/buscar.component';

@NgModule({
  declarations: [RegisterComponent, CausantesComponent, BuscarComponent],
  imports: [
    CommonModule,
    AfiliacionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RegisterComponent, CausantesComponent],
})
export class AfiliacionModule {}
