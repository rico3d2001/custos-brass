import { Injectable } from '@angular/core';
import { tap, catchError, map } from 'rxjs/operators';
import { Projeto } from './projeto';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  //3300
  //44345
  //8090
  //'http://localhost:52330/api'
  readonly url = 'https://brasscustosbackendapiweb20200321114720.azurewebsites.net/api';

  projetosSubject$: BehaviorSubject<Projeto[]> = new BehaviorSubject<Projeto[]>(null);

  private loaded: boolean = false;

  constructor(private http: HttpClient) { }

  getProjetos(): Observable<Projeto[]> {
    if (!this.loaded) {
      this.http.get<Projeto[]>(`${this.url}/projetos`)
        .subscribe(this.projetosSubject$)
      this.loaded = true;
    }
    return this.projetosSubject$.asObservable();
  }

  getProjetosHttp(): Observable<Projeto[]> {
    this.http.get<Projeto[]>(`${this.url}/projetos`)
      .subscribe(this.projetosSubject$);
    return this.projetosSubject$.asObservable();
  }

  get(i: number): Observable<Projeto> {
    return this.http.get<Projeto[]>(`${this.url}/projetos`)
    .pipe(
      map(projs => (i >= 0 && i < projs.length) ? projs[i] : null)
    )
  }


  addProjeto(proj: Projeto): Observable<Projeto> {
    return this.http.post<Projeto>(`${this.url}/projetos`, proj)
      .pipe(
        catchError((err) => {
          console.log(err.error.Message);
          return throwError(err.error.Message);
        }),
        tap((p) => {
          //console.log(p);

          this.projetosSubject$
            .getValue()
            .push(p);






          /*.push({
            ...proj,
            _id: p._id,
            nome: p.nome,
            cliente: p.cliente,
            acervo: p.acervo,
            encerramento: p.encerramento,
            numero_proposta: p.numero_proposta,
            status: p.status
          })*/
        })
      )
  }

  editProjeto(proj: Projeto): Observable<Projeto> {
    return this.http.patch<Projeto>(`${this.url}/projetos/${proj._id}`, proj)
      .pipe(
        tap(() => {
          let projetos = this.projetosSubject$.getValue();
          let i = projetos.findIndex(p => p._id === proj._id);
          if (i >= 0)
            projetos[i] = proj;
        })
      )
  }

  deleteProjeto(proj: Projeto) {
    return this.http.delete(`${this.url}/projetos/${proj._id}`)
      .pipe(
        tap(() => {
          let projetos = this.projetosSubject$.getValue();
          let i = projetos.findIndex(p => p._id === proj._id);
          if (i >= 0)
            projetos.splice(i, 1);
        })
      )
  }



}
