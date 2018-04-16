import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/throw';
import { HttpClient, HttpHeaders, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServiceService {
  private loginUrl = 'http://10.5.2.208:6543/';
  // groupData=[];
  // selectedGroup={};
  projectData={};
  
  // getGroupData(){
  //   return this.groupData;
  // }
  // getSelctdgroup(){
      
  //   return this.selectedGroup;
  // }

  ErrorHandler(e) {
    // debugger;
    // console.log(e);
    if (e.status == '400') {
      return Observable.throw('Username & Password required');
    } else return Observable.throw('Invalid credential!');
    // return Observable.throw('Invalid credential!');
  }

  login(User) {
    let dataInfo = {
      pswd: User.pswd,
      uname: User.uname
    };

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this._http
      .post(this.loginUrl + 'api/v1/auth', dataInfo, { headers: headers })
      .map((data: any) => {
        data = data.json();
        if (data.status == 'success') return data;
        //debugger;
        throw 'Invalid credential!';
      })
      .catch(e => this.ErrorHandler(e));
  }

  project(Id) {
    let headers = new Headers();
    let mParams = new URLSearchParams();
    mParams.set('group_id', Id);
    // let groupDataResult=this.groupData['result'] ||[];
    // for(let i=0;i<groupDataResult.length;i++){
    //    if(groupDataResult[i].id==Id){
    //     //  console.log("ID-->",Id);
    //             this.selectedGroup=groupDataResult[i];
    //    }
    // }
    headers.append('Content-Type', 'application/json');
    headers.append('X-Auth-Token', localStorage.getItem('X-Auth-Token'));
    return this._http.get(this.loginUrl + 'api/v1/group/projects', { headers: headers, params: mParams }).map(data1 => {
      return data1.json();
    });
  }

  groups() {
    let headers = new Headers();

    headers.append('X-Auth-Token', localStorage.getItem('X-Auth-Token'));

    headers.append('Content-Type', 'application/json');

    return this._http.get(this.loginUrl + 'api/v1/groups', { headers: headers }).map(data2 => {
      // this.groupData=data2.json();
      // return this.groupData;
      return data2.json();
    });
  }


  groupsSearch(searchName) {
    let headers = new Headers();
    let mParams = new URLSearchParams();
    mParams.set('search', searchName);
    headers.append('X-Auth-Token', localStorage.getItem('X-Auth-Token'));

    headers.append('Content-Type', 'application/json');

    return this._http.get(this.loginUrl + 'api/v1/groups', { headers: headers, params: mParams }).map(data2 => {
     
      // console.log("Search:", searchName);
      // console.log("I CAN SEE DATA HERE: groups name ", data2.json());
      this.projectData=data2.json();
      return this.projectData;
    });
  }

  constructor(private _http: Http, private route: ActivatedRoute, private router: Router) {}
}
