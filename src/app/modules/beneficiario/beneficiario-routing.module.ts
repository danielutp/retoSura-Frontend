import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterBeneficiarioComponent } from './paginas/register-beneficiario/register-beneficiario.component';
import { RentaComponent } from './paginas/renta/renta.component';

const routes: Routes = [
  { path: 'agregar', component: RegisterBeneficiarioComponent },
  { path: 'cotizacion', component: RentaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiarioRoutingModule {}
