import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { heroesType } from '../../models/heroes-type';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:heroesType[];
  constructor(private service:HeroesService) { }

  ngOnInit() {
    this.getHeores();  
  }
  getHeores():void{
     this.service.getHeroes().subscribe(heroes => this.heroes = heroes); 
  }


}
