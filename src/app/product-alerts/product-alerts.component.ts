// For sharing data between a parent and child components import and use Input.
import { Component, Input, Output, EventEmitter } from '@angular/core';
// Imports the datatype Product that is defined as interface in products.ts.
import { Product } from '../products';

// @Component is a decorator.
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

// The keyword export allows other modules to import this module/class (a TypeScript/ES6 feature).

  // A property named product is defined with an @Input() decorator.
  // The @Input() decorator indicates that the property value passes in 
  // from the component's parent, ProductListComponent.
  // The @Output() allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
  export class ProductAlertsComponent {
    @Input() product: Product | undefined;
    @Output() notify = new EventEmitter();
  }
