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

import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './shared/json.service';
import { ApidataComponent } from './apidata/apidata.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectiveComponent,
    PipesComponent,
    FormsComponent,
    PagenotfoundComponent,
    P1Component,
    ApidataComponent,
    ParentComponent,
    ChildComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [CommonService, JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
