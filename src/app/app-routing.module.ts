import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'afiliacion',
    loadChildren: () =>
      import('./modules/afiliacion/afiliacion.module').then(
        (m) => m.AfiliacionModule
      ),
  },
  {
    path: 'beneficiario',
    loadChildren: () =>
      import('./modules/beneficiario/beneficiario.module').then(
        (m) => m.BeneficiarioModule
      ),
  },
  {
    path: '*',
    redirectTo: 'afiliacion',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
