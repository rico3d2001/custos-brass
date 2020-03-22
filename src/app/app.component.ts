import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { User } from './auth/user';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { Projeto } from './main/projeto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  LOGO = "assets/img/logo.png";
  title = 'BrassCustosSP';
  foto = "";
  nomeProjeto = "";

  authenticated$: Observable<boolean>;
  user$: Observable<User>;

  constructor(
    private authService: AuthService, 
    private router: Router){
      this.authenticated$ = this.authService.isAuthenticated();
      this.user$ = this.authService.getUser();
      
  }

  ngOnInit() {
    console.log(this.foto);
      this.foto = this.authService.foto;
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }

  setProjeto(p: Projeto){
    
  }


}
