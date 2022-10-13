import { Component, OnInit } from '@angular/core';
import { AutohubService } from '../autohub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email;
  password;
  res;
  constructor(private service:AutohubService,private router:Router) { }

  ngOnInit(): void {
  }
  add()
  {
    console.log(this.email,this.password);
    this.service.getuser(this.email,this.password)
      .subscribe((details) => {
        this.res=details;
        if(this.res!=null)
        {
          this.service.emailname=this.email;
          console.log(this.res);
          this.router.navigate(['/home']);
        }
      });
  }
}
