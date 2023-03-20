import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersapiService {
  Mainurl: string = 'https://api.punkapi.com/v2'

  constructor(private http: HttpClient) { }

  getBeers() {
    //const url = `${this.Mainurl}'/beers/'`
    const url = 'https://api.punkapi.com/v2/beers'

    return this.http.get(url)
  }
 
}
