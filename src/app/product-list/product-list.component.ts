import { Component, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products : Product[] = [];
  
  constructor(
    private router: Router,
   ) {}

  share() {
    window.alert('O produto foi adicionado ao carrinho');
  }
  onSubmit(categoria: string, id: number) {
    this.router.navigate(['/']).then(() => { this.router.navigate(['produtos', categoria, id]); })
 }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/