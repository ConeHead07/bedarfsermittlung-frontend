import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabulatorTest01Component} from './components/tabulator-test01/tabulator-test01.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'app/TabulatorTest01', pathMatch: 'full' },
    { path: 'app/TabulatorTest01', component: TabulatorTest01Component, pathMatch: 'full' },
// { path: '', redirectTo: '/app/projects/add', pathMatch: 'full' },
// { path: 'app/projects/add', component: ProjectFormComponent },
// { path: 'app/projects/:id/edit', component: ProjectFormComponent },
// { path: 'app/projects', component: ProjectListComponent }
// { path: 'app/add-project/:id/:expand', component: AddProjectComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}