import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { M1Module } from './m1/m1.module';
import { C12Component } from './m1/m2/c12/c12.component';
import { M2Module } from './m1/m2/m2.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
@NgModule({
  declarations: [
    AppComponent,
    C12Component,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
