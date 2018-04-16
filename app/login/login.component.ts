import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  token: string;
  public User: any = {};
  error: string;
  error_message: string;

  constructor(private serviceService: ServiceService, private router: Router) {}
  onSave(f) {
    let formData = this.serviceService.login(f.value).subscribe(
      data => {
        //console.log(formData);
        if (data.status == 'success') {
          localStorage.setItem('user', this.User.uname);
          this.router.navigate(['/dashboard']);
          localStorage.setItem('X-Auth-Token', data.result.access_token);
          this.token = data.result.access_token;

          return data;
        }
      },
      error => {
        //debugger;
        this.error_message = error;
        console.log(this.error_message);
      }
    );
  }

  ngOnInit() {}
}
