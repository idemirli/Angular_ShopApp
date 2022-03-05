import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {

   
  constructor(private productRepository:ProductRepository,private categoryRepository:CategoryRepository,private cartService:Cart,private router:Router) { }
  

  //#region [Variables] 
  public selectedCategory?:Category;
  productId?:number;
  public selectedPage:number=1;
  public productsPerPage:number=3;
  public type:string="";
  //#endregion

  ngOnInit(): void {
    // this.routeparam.queryParams.subscribe(
    //   params => {
    //     debugger;
    //     this.type =  params.type;
    //   }
    // )
  }

  get products() : Product[] {    

    let index =(this.selectedPage-1)*this.productsPerPage;
      return this.productRepository.
        getProducts(this.selectedCategory)
        .slice(index,index+this.productsPerPage);
  }

 
getCategory(category:Category){
  this.selectedCategory=category;
}

  

  changePage(page:number){
   this.selectedPage=page;
  }

  get pageNumbers() : number[]{
    return Array(Math.ceil(this.productRepository
      .getProducts(this.selectedCategory).length/this.productsPerPage))
      .fill(0)
      .map((a,i)=>i+1);

      //Kategoriye ürünleri getir. ürün sayısı kadar array boyutu oluştur.
      //fill(0) array elemanlarını 0 yap.
      //map => a : eleman , i : index  yeni dizi oluşturacak map
  }



}
