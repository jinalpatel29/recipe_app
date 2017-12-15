import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { DisplayoneComponent } from './displayone/displayone.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  // {
  // path:'new',
  // pathMatch: 'full',
  // component: NewComponent
  // },
  { path: '', pathMatch: 'full', component: HomeComponent }, 
  { path: 'all', pathMatch: 'full', component: DisplayallComponent },
  { path: 'new', pathMatch: 'full', component: NewComponent },
  { path: 'recipe', pathMatch: 'full', component: DisplayoneComponent },
  { path: 'recipe/update', pathMatch: 'full', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
