import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductScreenComponent } from './add-product-screen/add-product-screen.component';
import { CurrentOrderScreenComponent } from './current-order-screen/current-order-screen.component';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';
import { DeliveryOrdersScreenComponent } from './delivery-orders-screen/delivery-orders-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { NewOrderScreenComponent } from './new-order-screen/new-order-screen.component';
import { OrdersScreenComponent } from './orders-screen/orders-screen.component';
import { PaymentScreenComponent } from './payment-screen/payment-screen.component';
import { PreviousOrdersScreenComponent } from './previous-orders-screen/previous-orders-screen.component';
import { ProfileEditScreenComponent } from './profile-edit-screen/profile-edit-screen.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { VerificationsPageComponent } from './verifications-page/verifications-page.component';

const routes: Routes = [
  {path: '', component: LoginScreenComponent},
  {path: 'login', component: LoginScreenComponent},
  {path: 'register', component: RegisterScreenComponent},
  {path: 'dashboard', component: DashboardScreenComponent},
  {path: 'profile', component: ProfileScreenComponent},
  {path: 'verifications', component: VerificationsPageComponent},
  {path: 'profile-edit', component: ProfileEditScreenComponent},
  {path: 'current-order', component: CurrentOrderScreenComponent},
  {path: 'previous-orders', component: PreviousOrdersScreenComponent},
  {path: 'add-product', component: AddProductScreenComponent},
  {path: 'orders', component: OrdersScreenComponent},
  {path: 'new-order', component: NewOrderScreenComponent},
  {path: 'payment', component: PaymentScreenComponent},
  {path: 'delivery-orders', component: DeliveryOrdersScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
