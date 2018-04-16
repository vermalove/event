import { Component, OnInit ,Input } from '@angular/core';
import {ServiceService} from '../service.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

groups=[];


   
  constructor( private serviceService:ServiceService, private router:Router) {
   }

   ngOnInit() {
     
    
          this.serviceService.groups().subscribe(
        data => {
          this.groups = data['result'];
          // console.log("project:",  this.groups);
        }
    );
  }
  
  
  // onclick()
  // {
  //    this.serviceService.logout().subscribe(res=>{
  //  localStorage.removeItem("user");
  //  this.router.navigate(['/login']);
  // }
  // }

}
