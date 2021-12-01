import { Component, OnInit } from '@angular/core';
import {categorias} from '../products'
import {Router} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  categorias = categorias
  constructor(
    private router: Router,
   ) {}
  onSubmit(categoria: string) {
    
    this.router.navigate(['/']).then(() => { this.router.navigate(['produtos', categoria]); })
    
    
 }
}
