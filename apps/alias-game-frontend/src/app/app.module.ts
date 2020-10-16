import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AliasGameModule } from '@spark-fountain/alias-game';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AliasGameModule,
    // ColorPickerModule  // TODO: decide if use or delete
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
