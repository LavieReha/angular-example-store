import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  // Dependency injection via contructor.
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /* To access the route parameters, we use route.snapshot, which is the ActivatedRouteSnapshot
    *  that contains information about the active route at that particular moment in time.
    */ 
    const routeParams = this.route.snapshot.paramMap;
    // Get the product id from the current route.
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

}
