import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginForm: FormGroup = this.fb.group({
    //'email': ['', Validators.required, Validators.email],
    //'password': ['', Validators.required, Validators.minLength(6)]
  //})

  loginForm: FormGroup = this.fb.group({
    'email': new FormControl('',[Validators.required,Validators.email]),
    'password': new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  
  loading = false;
  LOGO = "./assets/img/login.png";

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar ) { }

  ngOnInit() {
  }

  onSubmit(){
      const credentials = this.loginForm.value;
      this.loading = true;
      this.authService.login()
      .subscribe(
        user => {
           //console.log(user.token);
           this.snackBar.open(
             'Logged in suuccessfully. Welcome ' + user.name + '!', 'OK', {duration: 2000});
             this.router.navigateByUrl('/');
             this.loading = false;
        },
        err => {
           console.log(err);
           this.snackBar.open(
            'Login Error ', 'OK', {duration: 2000});
            this.loading = false;
        }
      )
  }

}
