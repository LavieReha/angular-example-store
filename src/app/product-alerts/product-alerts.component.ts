// For sharing data between a parent and child components import and use Input.
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products';

// @Component is a decorator.
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

// The keyword export allows other modules to import this module/class (a TypeScript/ES6 feature).
export class ProductAlertsComponent implements OnInit {

  // A property named product is defined with an @Input() decorator.
  // The @Input() decorator indicates that the property value passes in 
  // from the component's parent, ProductListComponent.
  @Input() product!: Product;
  constructor() { }

  ngOnInit(): void {
  }

}