import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { RegisterComponent } from './register/register.component';
import { DashboardScreenComponent } from './dashboard-screen/dashboard-screen.component';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';
import { ProfileScreenComponent } from './profile-screen/profile-screen.component';
import { ProfileComponent } from './profile/profile.component';
import { VerificationsPageComponent } from './verifications-page/verifications-page.component';
import { VerificationUserComponent } from './verification-user/verification-user.component';
import { ProfileEditScreenComponent } from './profile-edit-screen/profile-edit-screen.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { CurrentOrderScreenComponent } from './current-order-screen/current-order-screen.component';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { PreviousOrdersScreenComponent } from './previous-orders-screen/previous-orders-screen.component';
import { PreviousOrderComponent } from './previous-order/previous-order.component';
import { AddProductScreenComponent } from './add-product-screen/add-product-screen.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { OrdersScreenComponent } from './orders-screen/orders-screen.component';
import { OrderComponent } from './order/order.component';
import { NewOrderScreenComponent } from './new-order-screen/new-order-screen.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PaymentScreenComponent } from './payment-screen/payment-screen.component';
import { PaymentComponent } from './payment/payment.component';

import {
  FacebookLoginProvider,
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { DeliveryOrdersScreenComponent } from './delivery-orders-screen/delivery-orders-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginComponent,
    FooterComponent,
    RegisterScreenComponent,
    RegisterComponent,
    DashboardScreenComponent,
    DashboardNavigationComponent,
    ProfileScreenComponent,
    ProfileComponent,
    VerificationsPageComponent,
    VerificationUserComponent,
    ProfileEditScreenComponent,
    ProfileEditComponent,
    CurrentOrderScreenComponent,
    CurrentOrderComponent,
    PreviousOrdersScreenComponent,
    PreviousOrderComponent,
    AddProductScreenComponent,
    AddProductComponent,
    ProductComponent,
    OrdersScreenComponent,
    OrderComponent,
    NewOrderScreenComponent,
    ShoppingCartComponent,
    PaymentScreenComponent,
    PaymentComponent,
    DeliveryOrdersScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1494167347671080'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
