import { Product } from "./product";

export class ProductService{
    public getProducts()
    {
        let products:Product[];
        products = [
            new Product(1,'Ball Pens',376.34),
            new Product(2,'Soap',456.54),
            new Product(3,'Clothes',544.78)
        ]
        return products;
    }
}