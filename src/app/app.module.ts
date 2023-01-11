import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './components/home/home.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { DisciplinesComponent } from './components/disciplines/disciplines.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewdisciplineComponent } from './components/newdiscipline/newdiscipline.component';
import { EditdisciplineComponent } from './components/editdiscipline/editdiscipline.component';
import { NewprojetComponent } from './components/newprojet/newprojet.component';
import { EditprojetComponent } from './components/editprojet/editprojet.component';
import { ExamenComponent } from './components/examen/examen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    ProjetsComponent,
    DisciplinesComponent,
    NewdisciplineComponent,
    EditdisciplineComponent,
    NewprojetComponent,
    EditprojetComponent,
    ExamenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
