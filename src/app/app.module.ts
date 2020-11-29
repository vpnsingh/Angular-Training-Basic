import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';

import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from './shared/common.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { P1Component } from './pipes/p1/p1.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectiveComponent,
    PipesComponent,
    FormsComponent,
    PagenotfoundComponent,
    P1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
