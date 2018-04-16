import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  project = [];
  group = [];

  headName: string;
des:string;
  public Id: string;
  selectedData={};

  constructor(private serviceService: ServiceService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.params.subscribe(params =>
      this.Id = params['id']);
    this.route.params.subscribe(params =>
      this.headName = params['name']); 
      this.route.params.subscribe(params =>
     this.des = params['des']);

    this.serviceService.project(this.Id).subscribe(
      data => {
        // this.selectedData=this.serviceService.getSelctdgroup();
         
         
        this.project = data.result;
        // console.log("project:",  this.groups);

      }
    );
   
    // this.group=this.serviceService.getGroupData();
    

  }
  

}
