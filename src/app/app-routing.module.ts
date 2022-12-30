import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjetsComponent} from "./components/projets/projets.component";
import {DisciplinesComponent} from "./components/disciplines/disciplines.component";
import {HomeComponent} from "./components/home/home.component";
import {NewdisciplineComponent} from "./components/newdiscipline/newdiscipline.component";
import {EditdisciplineComponent} from "./components/editdiscipline/editdiscipline.component";
import {NewprojetComponent} from "./components/newprojet/newprojet.component";
import {EditprojetComponent} from "./components/editprojet/editprojet.component";

const routes: Routes = [
  {path: 'projets', component: ProjetsComponent},
  {path: 'disciplines', component: DisciplinesComponent},
  {path: '', component: HomeComponent},
  {path:"newDiscipline",component:NewdisciplineComponent},
  {path:"editDiscipline/:iddiscipline",component:EditdisciplineComponent},
  {path:"newProjet",component:NewprojetComponent},
  {path:"editProjet/:idprojet",component:EditprojetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
