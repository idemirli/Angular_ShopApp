//Ürün Ekle , Sil , Güncelle işlemlerinin yapıldığı Servis

import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
//CartItem Listesi ve buna bağlı özellikler
public  items:CartItem[]=[]; //CartItem'ları tutan obje
public  itemCount:number=0;  //Cart'ta kaç ürün var
public  total:number=0;      //Toplam Fiyat

addItem(product:Product,quantity:number=1){   //ürünü kart listesine ekleme  kısmı, varsa miktarı arttır , yoksa yeni ekle
let item = this.items.find(i=>i.product.id===product.id);
        if(item!=undefined){
            item.quantity+=quantity;
        }
        else {
            this.items.push(new CartItem(product,quantity));
        }
        this.calculate();
}

updateQuantity(product:Product,quantity:number){
    let item=this.items.find(x=>x.product.id===product.id);
    if(item){
        item.quantity=quantity;
    }
    this.calculate();
}

calculate(){ //Yeni ürün eklendiğinde, güncellendiğinde veya çıkarıldığında fiyat ve miktarları güncelliyoruz
 this.itemCount=0;
 this.total=0;
 this.items.forEach(item => {
       this.itemCount+=item.quantity;
       this.total+=(item.quantity* (item.product.price==undefined?0:item.product.price));
   });
   
   
}
removeItem(id:number){
  let itemIndex:number=this.items.findIndex(i=>i.product.id===id);
  this.items.splice(itemIndex,1);
  this.calculate();
}

clear(){
    this.items=[];
    this.itemCount=0;
    this.total=0;
}

}


class CartItem {
//Ürün bilgisini temsil edecek.

constructor(public product:Product,public quantity:number) {
  
    
}

}