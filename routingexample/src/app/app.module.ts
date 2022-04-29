import { style } from '@angular/animations';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdListComponent } from './prod-list/prod-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{path:'home',component: HomeComponent},
    {path:'prod-list',component: ProdListComponent}
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
