import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  constructor(private activatedRoute: ActivatedRoute)  {
  }
recipeId = this.activatedRoute.snapshot.params['recipeId'];
}
