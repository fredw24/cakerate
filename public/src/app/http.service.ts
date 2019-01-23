import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getCakes();

  }

  getCakes(){

    return this._http.get('/api/cakes');

  }

  addCake(newcake){
    return this._http.post('/api/cakes', newcake);

  }

  addRate(id, newrate){
    return this._http.patch('/api/cakes/' + id, newrate)

  }
}
