import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { PeopleComponent } from './people/people.component';
import { ProductsComponent } from './products/products.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TblProjetosComponent } from './projetos/tbl-projetos/tbl-projetos.component';
import { LstProjetosComponent } from './projetos/lst-projetos/lst-projetos.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { TotalizacaoComponent } from './projeto/totalizacao/totalizacao.component';
import { ResumoComponent } from './projeto/resumo/resumo.component';
import { FinanceiroComponent } from './projeto/financeiro/financeiro.component';
import { SatisfacaoClienteComponent } from './projeto/satisfacao-cliente/satisfacao-cliente.component';
import { AdminContratoComponent } from './projeto/admin-contrato/admin-contrato.component';
import { AcompanhamentoComponent } from './projeto/acompanhamento/acompanhamento.component';
import { PerformanceComponent } from './projeto/performance/performance.component';



@NgModule({
  declarations: [
    PeopleComponent, 
    ProductsComponent, 
    ProjetosComponent, 
    TblProjetosComponent, 
    LstProjetosComponent, 
    ProjetoComponent, 
    TotalizacaoComponent, 
    ResumoComponent, 
    FinanceiroComponent, 
    SatisfacaoClienteComponent, 
    AdminContratoComponent, 
    AcompanhamentoComponent, 
    PerformanceComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class MainModule { }
