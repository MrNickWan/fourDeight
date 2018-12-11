import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IdeaPageComponent } from './idea-page/idea-page.component';
import { RouterModule, Routes } from '@angular/router';
import { IdeaPortalUserComponent } from './idea-portal-user/idea-portal-user.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    IdeaPageComponent,
    IdeaPortalUserComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatCardModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
