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
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public service: BeersapiService) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsBeers = this.service.getBeers();
    this.obsBeers.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }
}


