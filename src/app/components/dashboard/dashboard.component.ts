import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { heroesType } from '../../models/heroes-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:heroesType[];
  constructor(private service:HeroesService) { }

  ngOnInit() {
    this.getHeores();  
  }
  getHeores():void{
     this.service.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5)); 
  }

}
