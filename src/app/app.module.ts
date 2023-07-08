import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponentComponent } from './character-component/character-component.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CharacterListComponent,
    CharacterComponentComponent,
    FormSearchComponent,
    CharacterDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  
  providers: [ ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
