import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  onecake: any;
  cakes: any;
  newCake: any;
  

  constructor(private _httpService: HttpService){
    this.allcake();
    
  }

  ngOnInit(){

    this.resetCake();
    this.resetRate();
  }

  resetCake(){
    this.newCake = {
      bakerName : "",
      imgUrl : ""
    }
    console.log("reset Cake:", this.newCake)

  }
  
  resetRate(){
    this.newRate={
      review: "",
      stars: 0
    }

  }

  allcake(){
    let observable = this._httpService.getCakes();
       observable.subscribe(data => {
          console.log("Got all cakes!", data)
          // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
          // This may be different for you, depending on how you set up your Task API.
          this.cakes = data;
       });
  }

  onSubmit(){
    this.newCake = { bakerName : this.newCake.bakerName, imgUrl:this.newCake.imgUrl}
    let observable = this._httpService.addCake(this.newCake);

    observable.subscribe(data =>{
      console.log("made a new cake", data)

    });
    this.resetCake();
    this.allcake();
  }

  rateSubmit(id){
    console.log(this.newRate)  
    console.log(id)

    let observable = this._httpService.addRate(id, this.newRate)

    observable.subscribe(data =>{
      console.log("add a new rate", data)

    })

  }

}
