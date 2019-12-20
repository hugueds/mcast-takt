import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class HttpTaktService {

  url = 'http://10.8.66.143/';

  constructor(private _http: HttpClient) { }


  getAndon() {
    return this._http.get(this.url + 'api/andon/');
  }

  getTakt() {

  }

}
