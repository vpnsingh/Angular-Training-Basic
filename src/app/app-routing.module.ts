import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { FormsComponent } from './forms/forms.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { P1Component } from './pipes/p1/p1.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  { path: 'binding', component : BindingComponent},
  { 
    path: 'pipe', 
    component : PipesComponent, 
    children: [
      { path : 'p1', component: P1Component}
    ]
  },
  { path: 'directive', component : DirectiveComponent},
  { path: 'forms', component : FormsComponent},
  { path: 'forms/:data', component : FormsComponent},
  { path: '', redirectTo: 'binding', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
