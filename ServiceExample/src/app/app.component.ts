import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ServiceExample';
  products:Product[] = [];
  productService:any;

constructor()
{
  this.productService = new ProductService();
}

getProducts()
{
  this.products = this.productService.getProducts();
}

}
