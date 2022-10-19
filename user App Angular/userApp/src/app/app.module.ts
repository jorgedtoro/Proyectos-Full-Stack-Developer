import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //para usar las peticiones http.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { Code404Component } from './components/code404/code404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewUserComponent,
    ListUsersComponent,
    FormUserComponent,
    CardUserComponent,
    FooterComponent,
    Code404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxTypedJsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
