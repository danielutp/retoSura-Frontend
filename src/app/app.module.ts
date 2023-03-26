import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AfiliacionModule } from './modules/afiliacion/afiliacion.module';
import { MenuComponent } from './modules/shared/menu/menu.component';
import { BeneficiarioModule } from './modules/beneficiario/beneficiario.module';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AfiliacionModule,
    BeneficiarioModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
