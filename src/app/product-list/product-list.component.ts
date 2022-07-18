import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import productsitems from '../../assets/products.json';
import { Product } from '../interfaces/product';
// import { rate } from '../interfaces/product';








@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild(ProductComponent)cardComponent : any;

   productlist:Array<Product>=productsitems;
  //  rating:Array<rate>=productsitems;

    
  constructor() { }

  ngOnInit(): void {
  }
  

  alertProductName(product_title: string) {
    alert(product_title);
  }
}
