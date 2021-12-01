import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  
  
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  productsRelacionados: Product[] = [];
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    
  
    
    
    this.product = products.find(product => product.id === productIdFromRoute);
    this.productsRelacionados = products.filter(product => product.categoria === this.product?.categoria).sort(()=> Math.random() - 0.5);
    
  }
}