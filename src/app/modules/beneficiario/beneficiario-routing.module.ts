import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterBeneficiarioComponent } from './paginas/register-beneficiario/register-beneficiario.component';

const routes: Routes = [
  { path: 'agregar', component: RegisterBeneficiarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiarioRoutingModule {}
