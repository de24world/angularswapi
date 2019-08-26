import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class SwFilmService {
    films$ = this.http.get('https://swapi.co/api/films/')
      .map((res:any) => res.results);

    constructor(private http: HttpClient) {} 
}