import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AfiliacionModule } from './modules/afiliacion/afiliacion.module';
import { BeneficiarioModule } from './modules/beneficiario/beneficiario.module';
import { HeaderComponent } from './modules/shared/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
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
