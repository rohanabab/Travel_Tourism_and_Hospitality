import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooknowComponent } from './booknow/booknow.component';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SellComponent } from './sell/sell.component';
import { SignupComponent } from './signup/signup.component';
import { TourismComponent } from './tourism/tourism.component';

const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'buy',component:BuyComponent},
  {path:'sell',component:SellComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'booknow',component:BooknowComponent},
  {path:'',component:LoginComponent},
  {path:'tourism',component:TourismComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
