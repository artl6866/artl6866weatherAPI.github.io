import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeattleComponent } from './seattle/seattle.component';
import { KiheiComponent } from './kihei/kihei.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetWeatherService } from './get-weather.service';
import { LasvegasComponent } from './lasvegas/lasvegas.component';


@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    KiheiComponent,
    LasvegasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [GetWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }