import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from  '@angular/common/http';

@Injectable()
export class HeroesService {

  constructor(private http:HttpClient) { }

  getHeroes():Observable<any[]>{
    return this.http.get<any[]>("http://localhost:3000/api/heroes");
  }

}
