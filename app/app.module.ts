import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AuthGuard } from './AuthGuard';

import {ServiceService} from './service.service';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { CategoryComponent } from './category/category.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CategoryComponent,
    ViewProjectComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [NgbModule.forRoot(),
    BrowserModule,FormsModule,HttpModule, AppRoutingModule,HttpClientModule
  ],
  providers: [ServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
