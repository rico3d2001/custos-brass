import { Component, OnInit, Input } from '@angular/core';
import { ResumoService } from '../../resumo.service';
import { Observable } from 'rxjs';
import { Resumo } from '../../resumo';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Projeto } from '../../projeto';
import { MatSnackBar } from '@angular/material';
import { CurrencyPipe } from '@angular/common';




@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css'],
  providers: [CurrencyPipe]
})
export class ResumoComponent implements OnInit {

  //@Input() guid_projeto: string;

  @Input() projetoResumo$: Observable<Projeto>;
  resumo$: Observable<Resumo>;
  projeto: Projeto;
  resumo: Resumo;
  show: boolean;
  resumoForm: FormGroup;



  constructor(
    private resumoService: ResumoService,
    private fb: FormBuilder,
    private SnackBar: MatSnackBar,
    private currencyPipe: CurrencyPipe) {

    const amount = 260.02;
    const amountInCurrencyFormated = this.currencyPipe.transform(amount);

    console.log(amountInCurrencyFormated);

    this.resumoForm = this.fb.group({
      _id: new FormControl('', undefined),
      GUID: new FormControl('', undefined),
      GUID_Projeto: new FormControl('', undefined),
      ContractualCompletion: new FormControl('', Validators.required),
      DataPrevista: new FormControl('', Validators.required),
      Gerente: new FormControl('', Validators.required),
      Controlador: new FormControl('', Validators.required),
      ValorBruto: new FormControl('', Validators.required),
      PrecoFixo: new FormControl('', Validators.required),
      ValorReembolsavel: new FormControl('', undefined),
      DetalhesDescritivos: new FormControl('', undefined),
      FaseCorrente: new FormControl('', Validators.required),
      GUID_ProjetoConceitual: new FormControl('', undefined),
      Start: new FormControl('', Validators.required)
    });
    /*
    this.resumoForm = this.fb.group({
      '_id': [undefined],
      'GUID': [undefined],
      'GUID_Projeto': [undefined],
      'ContractualCompletion': ['', [Validators.required]],
      'DataPrevista': ['', [Validators.required]],
      'Gerente': ['', [Validators.required]],
      'Controlador': ['', [Validators.required]],
      'ValorBruto': ['', [Validators.required]],
      'PrecoFixo': ['', [Validators.required]],
      'ValorReembolsavel': ['', [Validators.required]],
      'DetalhesDescritivos': ['', [Validators.required]],
      'FaseCorrente': ['', [Validators.required]],
      'GUID_ProjetoConceitual': ['', [Validators.required]],
      'Start': ['', [Validators.required]]
    });
    */


  }

  ngOnInit() {
    this.show = true;
    this.projetoResumo$.subscribe((p) => {
      this.projeto = p as Projeto
      this.resumoService.getResumo(this.projeto.GUID)
        .subscribe((r) => {
          // console.log(r);
          if (r) {
            this.resumo = r as Resumo;
            console.log(this.resumo[0].ValorBruto);
            this.resumoForm.setValue(this.resumo[0]);
          }
        });


    })
  }


  onSubmit() {

  }

}
