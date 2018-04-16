import { Component, OnInit,OnDestroy } from '@angular/core';

import {ServiceService} from '../service.service';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

 group=[];
  public  Search:string;

   private httpSubscription;
  constructor(private serviceService:ServiceService ,private route: ActivatedRoute) {
         
   }

  ngOnInit() {

    // console.log("Category Loaded")
//debugger;z
     this.route.params.subscribe( params =>{
        this.Search = params['Search'];
// console.log("Search1",this.Search);
        this.httpSubscription=this.serviceService.groupsSearch(this.Search).subscribe( data => {
          this.group = data['result'];
       
    
   
  });
  });
}

  ngOnDestroy() {
    this.httpSubscription.unsubscribe();
  }


}
