import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './componentes/register/register.component';
import { CausantesComponent } from './paginas/causantes/causantes.component';

const routes: Routes = [
  { path: '', component: CausantesComponent },
  { path: 'editarPersona/:id', component: RegisterComponent },
  { path: 'guardarPersona', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfiliacionRoutingModule {}
