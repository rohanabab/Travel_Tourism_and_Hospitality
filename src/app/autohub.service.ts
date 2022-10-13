import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutohubService {

  details=[]
  emailname;
  
  constructor(private http:HttpClient) { }
  add_booking_details(booking_details){
    console.log();
    return this.http.post("http://localhost:3000/booknow/booking_details",booking_details)
  }
  add_signup_details(signupdetails){
    console.log();
    return this.http.post("http://localhost:3000/signup/signupdetails",signupdetails)
  }
  getuser(email,password)
  {
    console.log();
    return this.http.get(`http://localhost:3000/signup/getUser/${email}/${password}`)
  }
}