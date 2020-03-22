import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Projeto } from '../projeto';
import { MainService } from '../main.service';
import { ProjetosService } from '../projetos.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projetos$: Observable<Projeto[]>;
  show: boolean;

  constructor(
    private projetosService: ProjetosService,
    private SnackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.show = true;
    this.projetos$ = this.projetosService.getProjetos();
  }

  submeteProjeto(p: Projeto) {
    if (!p._id) {
      this.addProjeto(p);
    }
    else {
      this.editProjeto(p);
    }

  }

  entrarProjeto(p: Projeto) {
    console.log(p);
    this.router.navigateByUrl('/main/projeto');
  }

  addProjeto(p: Projeto) {
    this.projetosService.addProjeto(p)
      .subscribe(
        (proj) => {
          console.log(proj);
          this.SnackBar.open('Projeto criado com sucesso!', 'OK', { duration: 2000 });
          this.pisca();
        },
        (err) => {
          console.log(err);
          this.SnackBar.open(err, 'OK', { duration: 2000 })
        }
      );
  }

  editProjeto(p: Projeto) {
    this.projetosService.editProjeto(p)
      .subscribe(
        (proj) => {
          this.SnackBar.open('Projeto foi modificado com sucesso!', 'OK', { duration: 2000 })
        },
        (err) => {
          this.SnackBar.open('Não foi possível modificar o projeto', 'OK', { duration: 2000 })
        }
      );
  }

  deleteProjeto(p: Projeto) {
    this.projetosService.deleteProjeto(p)
      .subscribe(
        (proj) => {
          this.SnackBar.open('Projeto apagado do banco de dados!', 'OK', { duration: 2000 })
          this.pisca();
        },
        (err) => {
          this.SnackBar.open('Não foi possível apagar o projeto', 'OK', { duration: 2000 })
        }
      );
  }

  pisca(){
    this.show = false;
    setTimeout(() => {
      this.show = true;
    }, 30);
  }

}
