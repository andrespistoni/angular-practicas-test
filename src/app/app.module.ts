import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//
import { RouterModule } from '@angular/router';
//
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// Rutas
import { AppRoutes } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { HttpModule } from '@angular/http';
// Custom Component
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CreateHtmlFileComponent } from './create-html-file/create-html-file.component';
import { ToDoComponent } from './to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    CreateHtmlFileComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot(AppRoutes, {
      enableTracing: false
      }),
    AngularFontAwesomeModule,
    Ng4LoadingSpinnerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
