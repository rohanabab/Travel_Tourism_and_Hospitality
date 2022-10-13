import { Component, OnInit } from '@angular/core';
import { AutohubService } from '../autohub.service';
import { sellSchema } from '../sellSchema';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  
  customer_details=[];

  constructor(private service:AutohubService) { }

  ngOnInit() {
  }
  public name: String;
  public phone: number;
  public car_model: String;
  public address: String;
  public city: String;
  public state: String;
  public price: number;
  SubmitOn(){
    
    var obj:sellSchema={
      
      name:this.name,
      phone:this.phone,
      car_model:this.car_model,
      address:this.address,
      city:this.city,
      state:this.state,
      price:this.price
    }
    this.service.details.push(obj)
    console.log(this.service.details);
    this.customer_details=this.service.details;
  }
}
