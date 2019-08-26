import { Component } from '@angular/core';
import { SwFilmService } from './sw-film.service';
import { Film } from './sw-film.model';


@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent  { 
  constructor(private sw : SwFilmService) { }
}

