
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {ProjectComponent} from './project/project.component';
import {WebProjectComponent} from './web-project/web-project.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'webProject', component: WebProjectComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
