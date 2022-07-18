import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsitems from '../../assets/products.json';
import { Product } from '../interfaces/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productlist:Array<Product>=productsitems;
  productDetails:Product | undefined = {
    id: 1,
title:"aliaa",
price: 99,
description: "a",
category: "aa",
image: "ss",
rate:22,
count:22
  };
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const activatedRouteID = this.activatedRoute.snapshot.params['id'];
    this.productDetails = this.productlist.find(
      (product) => product.id == activatedRouteID
    );
  }

  
  

}
