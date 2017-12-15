import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Recipe } from '../recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name;
  recipe :Recipe = new Recipe();
  constructor(public service:DataService,  private router: Router) {
    this.name = this.service.getUser();
   }

   onSubmit(){
     console.log("button clicked");
     this.recipe.chef = this.service.getUser();
     console.log(this.recipe);
     this.service.createRecipe(this.recipe);
     this.router.navigate(['recipe']);
     this.recipe = new Recipe();
   }

  ngOnInit() {
    this.name = this.service.getUser();
  }

}
