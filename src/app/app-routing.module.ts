import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';

const routes:Routes=[
  {path:'shop',component:ShopComponent},
  {path:'cart',component:CartDetailComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'',redirectTo:'shop',pathMatch:'full'}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
