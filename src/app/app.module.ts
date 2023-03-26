import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AfiliacionModule } from './modules/afiliacion/afiliacion.module';
import { RegisterComponent } from './modules/beneficiario/register/register.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AfiliacionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
