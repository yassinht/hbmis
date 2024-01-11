import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './views/products/products.component';
import { FaqComponent } from './views/faq/faq.component';
import { CarouselComponent } from 'ngx-owl-carousel-o';
import { ServicesComponent } from './views/services/services.component';
import { ContactComponent } from './views/contact/contact.component';
import { LandingComponent } from './views/landing/landing.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  { path: 'propos-de-nous', component: CarouselComponent }, // Route for FAQ component
  {path:'services',component:ServicesComponent},
  { path: 'produit', component: ProductsComponent }, // Route for FAQ component
  {path:'contact',component:ContactComponent},
  {path:'faq',component:FaqComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
