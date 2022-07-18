import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';

// import { rate } from '../interfaces/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  @Input() product: Product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rate: 3.9,
    count: 120
    
    };
    
 
  @Output() alertproductName = new EventEmitter<string>();


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToDetails(id : number) {
    this.router.navigate(['/addtocart' , id]);

  }
  emitProductName(){
    // this.alertproductName.emit(this.productName);
  }
}


