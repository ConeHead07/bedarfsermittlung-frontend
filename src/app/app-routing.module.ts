import { Test02Component } from './test02/test02.component';
import { TabulatorTest01Component } from './components/tabulator-test01/tabulator-test01.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BedarfsermittlungAuswertungenComponent} from "./components/bedarfsermittlung-auswertungen/bedarfsermittlung-auswertungen.component";

const routes: Routes = [
  { path: '', redirectTo: '/app/TabulatorTest01', pathMatch: 'full' },
  { path: 'app/TabulatorTest01', component: TabulatorTest01Component },
  { path: 'app/test02', component: Test02Component },
  { path: 'app/BedarfsermittlungAuswertungen/:kid', component: BedarfsermittlungAuswertungenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
