import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AuthGuard } from './_gaurd/auth.guard';
import { AuthInterceptor, errorInterceptor } from './_gaurd/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: errorInterceptor, multi: true },
              {provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi   : true},
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
