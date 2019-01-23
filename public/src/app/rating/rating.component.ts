import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


  newRate: any;

  constructor(private http:HttpService) { }

  ngOnInit() {
   this.resetRate(); 
  }

  resetRate(){
    this.newRate={
      review: "",
      stars: 0
    }

  }

  rateSubmit(id){
    console.log(this.newRate)  
    console.log(id)

    let observable = this.http.addRate(id, this.newRate)

    observable.subscribe(data =>{
      console.log("add a new rate", data)

    })

  }
}
