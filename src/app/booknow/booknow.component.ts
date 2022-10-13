import { Component, OnInit } from '@angular/core';
import { AutohubService } from '../autohub.service';
import { booknowSchema } from '../booknowSchema';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {


 

  constructor(private service:AutohubService) { }

  ngOnInit(): void {
  }
  public first_name: String;
  public last_name: String;
  public phone_no: number;
  public email_id:String;
  public Destination: String;
  public StartingPoint: String;
  
  public price: number;
  public date: Date;
  public persons:number;
  public total_price:number;
  public modeoftransport:string;
  Finish(){
      var obj:booknowSchema={
          first_name:this.first_name,
          last_name:this.last_name,
          email_id:this.email_id, 
          modeoftransport:this.modeoftransport,
          phone_no:this.phone_no,
          date:this.date,
          Destination:this.Destination,
          StartingPoint:this.StartingPoint,
      
          price:this.price,
          persons:this.persons
      }
      this.service.add_booking_details(obj).subscribe()
      this.total_price=this.price*this.persons;
      alert("Total Price : "+this.total_price);
  }
}
