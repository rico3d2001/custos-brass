import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { ProjetosComponent} from './projetos/projetos.component';
import { ProductsComponent } from './products/products.component';
import { ProjetoComponent } from './projeto/projeto.component';



const routes: Routes = [
  {path: 'projetos', component: ProjetosComponent},
  {path: 'projetos/:index', component: ProjetoComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'people', component: PeopleComponent},
  {path: '', redirectTo: 'projetos'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
