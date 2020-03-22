import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Resumo } from './resumo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumoService {

  //'http://localhost:52330/api'
  readonly url = 'https://brasscustosbackendapiweb20200321114720.azurewebsites.net/api';




  resumoSubject$: BehaviorSubject<Resumo> = new BehaviorSubject<Resumo>(null);
  //private loaded: boolean = false;

  constructor(private http: HttpClient) { }
  
  getResumo(guidProjeto: string): Observable<Resumo>{
     console.log(guidProjeto);
    //if (!this.loaded) {
      return this.http.get<Resumo>(`${this.url}/resumos/${guidProjeto}`);
        //.subscribe(this.resumoSubject$);
      //this.loaded = true;
    //}
    //return this.resumoSubject$.asObservable();
  }


}
