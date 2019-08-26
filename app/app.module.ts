import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CustomMaterialModule } from './material.module';
import { SwFilmService } from './sw-film.service';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    CustomMaterialModule 
  ],
  declarations: [ AppComponent ],
  providers : [
      SwFilmService

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
