import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  
    {path: '', component: HomeComponent},
    { path: 'produtos/:categoria', component: CategoriaComponent, data: { breadcrumb: (resolvedId: string) => resolvedId }},
    { path: 'produtos/:categoria/:productId', component: ProductDetailsComponent, data: { breadcrumb: (resolvedId: string) =>  resolvedId} },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
