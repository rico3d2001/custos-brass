import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:3000';
  private subjUser$: BehaviorSubject<User> = new BehaviorSubject(null);
  private subjLogedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  foto: string;

  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/auth/register`, user);
  }

  login(): Observable<User> {
    return this.http
      .get<User>('http://localhost:3000/api/forge/user/profile')
      .pipe(
          tap((u: User) => {
            //console.log(u.token);
            localStorage.setItem('token', u.token);
            //console.log(u.token);
            this.foto = u.picture;
            this.subjLogedIn$.next(true);
            this.subjUser$.next(u);
          })
      )
  }

  /*
  login(credentials: { email: string, password: string }): Observable<User> {
    return this.http
      .post<User>(`${this.url}/auth/login`, credentials)
      .pipe(
          tap((u: User) => {
            localStorage.setItem('token', u.token);
            this.subjLogedIn$.next(true);
            this.subjUser$.next(u);
          })
      )
  }
  api/forge/oauth/token

  isAuthenticated(): Observable<boolean>{
    const token = localStorage.getItem('token');
    if(token && !this.subjLogedIn$.value){
      return this.checkTokenValidation();
    }
    return this.subjLogedIn$.asObservable();
  }
  */
 token = "";

 isAuthenticated(): Observable<boolean>{

  this.http
  .get<User>(`${this.url}/api/forge/user/profile`)
  .pipe(
    tap((u: User) => {
      this.token = u.token;
      //console.log(u.token);
    }));

  if(this.token && !this.subjLogedIn$.value){
    return this.checkTokenValidation();
  }
  return this.subjLogedIn$.asObservable();
}

  checkTokenValidation(): Observable<boolean> {
    return this.http
    .get<User>(`${this.url}/api/forge/user/profile`)
    .pipe(
      tap((u: User) => {
        console.log('Usuario => ' + u);
        if(u) {
          localStorage.setItem('token', u.token);
          this.subjLogedIn$.next(true);
          this.subjUser$.next(u);
        }
      }),
      map((u: User) => (u)?true:false),
      catchError((err) => {
        this.logout();
        return of(false);
      })
    );
  }

  getUser(): Observable<User>{
    return this.subjUser$.asObservable();
  }

  logout(){
    localStorage.removeItem('token');
    this.subjLogedIn$.next(false);
    this.subjUser$.next(null);
  }


}
