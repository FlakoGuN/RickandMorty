import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }

  getDetails(id:number) {
    return this.http.get<Character>(`${environment.apiURL}${id}`);
  }
  
  searchCharacters(query='', page=1) {
    return this.http.get<Character[]>(`${environment.apiURL}?name=${query}&page=${page}`);
  }
}
