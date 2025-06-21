import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-list/product-details/product-details';
import { Order } from './order/order';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'product-list', component: ProductList },
  { path: 'details/:id', component: ProductDetails },
  { path: 'about', component: About },
  { path: 'order', component: Order },
];
