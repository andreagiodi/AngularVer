import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BeersapiService } from '../beersapi.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'

@Component({
  selector: 'app-item-birre',
  templateUrl: './item-birre.component.html',
  styleUrls: ['./item-birre.component.css']
})
export class ItemBirreComponent {
  routeObs!: Observable<ParamMap>; 
  obsBeers! : any

  results : any; 
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private location: Location,
    public service: BeersapiService ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) =>
  {
    let beerId : any = params.get('id'); 
    console.log (beerId); 

    this.obsBeers = this.service.getBeerByID(beerId);
    this.obsBeers.subscribe((data: any) => { this.results = data; console.log(this.results) });
    console.log(this.results)
  }

  back(){ 
    this.location.back();
  }
}



