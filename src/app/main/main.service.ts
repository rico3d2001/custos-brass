import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Person } from './person';
import { Product } from './product';
import { catchError, tap } from 'rxjs/operators';
import { Projeto } from './projeto';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  //3300
  //44345
  //8090
  //'http://localhost:52330/api'
  readonly url = 'https://brasscustosbackendapiweb20200321114720.azurewebsites.net/api';

  

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}/people`)
      .pipe(
        tap(p => console.log(p)),
        catchError((e) => {
          return throwError(e);
        })
      )
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`)
      .pipe(
        tap(p => console.log(p)),
        catchError((e) => {
          return throwError(e);
        })
      )
  }

  //////////////////////////////////////

  

 





}
