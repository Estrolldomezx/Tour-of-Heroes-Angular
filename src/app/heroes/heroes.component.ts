import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  //generate 3 metadata
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero ={
    id:1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void { //call after create components
  }

}
