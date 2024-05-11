import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"product", component : ProductListComponent},
    {path:"cart", component : CartComponent},
    {path:"", component : ProductListComponent}
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule {}
