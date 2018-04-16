import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }      from './login/login.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { AuthGuard } from './AuthGuard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  },
  { path: 'dashboard/:Search', component: CategoryComponent, canActivate: [AuthGuard]  },
  { path: 'dashboard/viewProject/:name/:id/:des', component: ViewProjectComponent, canActivate: [AuthGuard]  },
   { path: 'dashboard/:name/viewProject/:name/:id/:des', component: ViewProjectComponent, canActivate: [AuthGuard]  }
   ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) , 
    CommonModule
  ],
  declarations: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
