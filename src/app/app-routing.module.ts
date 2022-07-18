import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent} from './product-details/product-details.component';


import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AddtocartComponent } from './addtocart/addtocart.component';


const routes: Routes = [
  { path: 'addtocart/:id', component: AddtocartComponent, canActivate: [AuthGuardGuard]  },
  { path: '', component: ProductListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },

  { path: 'login', component:  LoginComponent  },
  { path: '**', component:  NotfoundComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
