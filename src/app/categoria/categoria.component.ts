import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  
  listProducts: Product[] = products;
  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
    const productCategoriaFromRoute = String(routeParams.get('categoria'));
    if(productCategoriaFromRoute != null) {
      this.listProducts = products.filter(product => product.categoria === productCategoriaFromRoute).sort(()=> Math.random() - 0.5);
      
    } 
    
  }

}


