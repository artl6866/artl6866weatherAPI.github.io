import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component'
import { KiheiComponent } from './kihei/kihei.component';
import { LasvegasComponent } from './lasvegas/lasvegas.component';

const routes: Routes = [
  {path: 'seattle', pathMatch: 'full', component: SeattleComponent},
  {path: 'kihei', pathMatch: 'full', component: KiheiComponent},
  {path: 'lasvegas', pathMatch:'full', component: LasvegasComponent},
  {path: '', component:SeattleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
