import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent implements OnInit {
  name;
  recipes;
  recipe: Recipe = new Recipe();
  constructor(public service: DataService, private router: Router) {
    this.name = this.service.getUser();
  }

  onClick() {
    this.router.navigate(['/new']);
  }

  onLike(recipe){
    this.recipe = recipe;
    this.recipe.rating +=1;
    this.service.updateRating(this.recipe);
  }

  ngOnInit() {
    this.name = this.service.getUser();
    this.service.recipeObserver.subscribe(
      (result) => this.recipes = result
    )
    this.service.getAll();
  }


}
