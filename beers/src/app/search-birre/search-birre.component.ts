import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeersapiService } from '../beersapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-birre',
  templateUrl: './search-birre.component.html',
  styleUrls: ['./search-birre.component.css']
})
export class SearchBirreComponent {
  query: string | undefined;
  obsBeers: Observable<Object> | undefined;
  results: any;
  constructor(public service: BeersapiService) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsBeers = this.service.getBeersByName(this.query);
    this.obsBeers.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  
}


