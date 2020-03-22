import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Projeto } from '../projeto';
import { ResumoService } from '../resumo.service';
import { ProjetosService } from '../projetos.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  projeto$: Observable<Projeto>;
  projeto: Projeto;

  constructor(
    private route: ActivatedRoute,
    private projetosService: ProjetosService) { }

  ngOnInit() {
    //console.log('projetoComponent');
    let index: number = +this.route.snapshot.paramMap.get('index');
    this.projeto$ = this.projetosService.get(index);
    //this.projeto$.subscribe((p) => {
      //this.projeto = p as Projeto
      //console.log(this.projeto)}
    //);

    /*console.log('Indice: ', this.route.snapshot.paramMap.get('index'));
    this.route.paramMap
      .subscribe((params) => {

      });*/
  }

}
