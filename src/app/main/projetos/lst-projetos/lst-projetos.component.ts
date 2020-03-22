import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjetosService } from '../../projetos.service';
import { Observable } from 'rxjs';
import { Projeto } from '../../projeto';

@Component({
  selector: 'app-lst-projetos',
  templateUrl: './lst-projetos.component.html',
  styleUrls: ['./lst-projetos.component.css']
})
export class LstProjetosComponent implements OnInit {

  @Input() lstprojetos$: Observable<Projeto[]>;
  @Output() respostaListaProjeto = new EventEmitter<Projeto>()

  constructor(
    private projetosService: ProjetosService) { }

  ngOnInit() {
    //this.lstprojetos$ = this.projetosService.getProjetos();
  }

  entraProjeto(event){
    this.respostaListaProjeto.emit(event);
  }




}
