import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StonePaperComponent } from './stone-paper/stone-paper.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'stone-paper', component: StonePaperComponent, data: {title: 'Game | Stone Paper Scissor'}},
  {path: '**', component: HomeComponent},
  {path: '',  redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
