import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersapiService {

  constructor(private http: HttpClient) { }

  getBeers() {
    const url = 'https://api.punkapi.com/v2/beers'

    return this.http.get(url)
  }

  getBeersByName(name : string) {
    const url = `https://api.punkapi.com/v2/beers?beer_name=${name}`

    return this.http.get(url)
  }

  getBeerByID(id : string) {
    const url = `https://api.punkapi.com/v2/beers/${id}`

    return this.http.get(url)
  }
 
}
