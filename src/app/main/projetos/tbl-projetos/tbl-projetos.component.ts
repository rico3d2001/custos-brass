import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Projeto } from '../../projeto';
import { MatSnackBar } from '@angular/material';
import { ProjetosService } from '../../projetos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tbl-projetos',
  templateUrl: './tbl-projetos.component.html',
  styleUrls: ['./tbl-projetos.component.css']
})
export class TblProjetosComponent implements OnInit {

  @Input() tblprojetos$: Observable<Projeto[]>;
  @Output() respostaTabelaProjeto = new EventEmitter<Projeto>()
 
  displayedColumns: string[] = ['cc', 'nome', 'cliente', 'numero_proposta', 'acervo', 'encerramento', 'status','operations'];

  projetosForm = this.fb.group({
    _id: [undefined],
    cc: ['', [Validators.required]],
    nome: ['', [Validators.required]],
    cliente: ['', [Validators.required]],
    numero_proposta: ['', [Validators.required]],
    acervo: [''],
    encerramento: [''],
    status: ['']
  });

  constructor(
    private fb: FormBuilder,
    private SnackBar: MatSnackBar,
    private projetosService: ProjetosService) { }

  ngOnInit() {
    this.tblprojetos$ = this.projetosService.getProjetosHttp();
  }

  onSubmit() {
    
    let p: Projeto = this.projetosForm.value;
    this.respostaTabelaProjeto.emit(p);
  

  }






  clearFields() {
    //this.projetosForm.c
  }

  cancel() {

  }

 

  

}
