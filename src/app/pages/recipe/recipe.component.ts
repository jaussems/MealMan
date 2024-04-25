import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../shared/services/data.service";
import { Meal, } from "../../shared/interfaces/api";
import {NgOptimizedImage} from "@angular/common";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements  OnInit{
  recipe$: Meal | undefined
  constructor(private activatedRoute: ActivatedRoute, private _dataService: DataService,  private sanitizer: DomSanitizer)  {
  }

  recipeId = this.activatedRoute.snapshot.params['recipeId'];

  ngOnInit() {
   this.getData();
  }

  getData() {
    this._dataService.getRecipeById(this.recipeId).subscribe((value) => {
      this.recipe$ = value;
      console.log(`this.recipe$ = ${this.recipe$}`);
    })
  }

  setIFrameLink(youtubeURL: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeURL);
  }
}
