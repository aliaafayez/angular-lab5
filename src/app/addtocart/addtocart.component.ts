import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productsitems from '../../assets/products.json';
import { Product } from '../interfaces/product';


@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
   
  }

}
