import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeMx from '@angular/common/locales/es';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GitSearchService } from './services/git-search.service';
import { GitSearchComponent } from './components/git-search/git-search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SlidersComponent } from './sliders/sliders.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';

// the second parameter 'es-MX' is optional
registerLocaleData(localeMx, 'es-MX');

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomePageComponent,
    NavbarComponent,
    SlidersComponent,
    GitSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
