import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "./category.model";
import { Product } from "./product.model";
import { RestService } from "./rest.service";


@Injectable()
  export class ProductRepository implements OnInit {
  
    private products : Product[] = [];
    constructor(private restService:RestService) { 

      this.restService.getProducts().subscribe(data => {this.products=data});
    }
    ngOnInit(): void {
       
    }

    getProduct(id:number) : Product {
     return this.products.find(x=> x.id===id)??{} ;
    }

    getProducts(category?:Category): Product[]{
      if(category)
        return this.products.filter(x=> x.category===category.name);
        else
          return  this.products;
    }

  }
  