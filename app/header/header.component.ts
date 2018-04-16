import { Component, OnInit,Input } from '@angular/core';
import {ServiceService} from '../service.service';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";
import {NgForm,FormsModule} from '@angular/forms';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 Search:string;
 @Input() public searchName:string;

  constructor(private serviceService:ServiceService ,private router: Router) { }

  ngOnInit() {
  }
  
search(f){
//  this.serviceService.search(f.value.searchName);
      
  this.router.navigate(['/dashboard',f.value.searchName]);
    // console.log("search2",f.value.searchName);
    
    
  // });


}

}