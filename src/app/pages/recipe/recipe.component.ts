import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../shared/services/data.service";
import { Meal, } from "../../shared/interfaces/api";
import {NgOptimizedImage} from "@angular/common";
import {DomSanitizer} from "@angular/platform-browser";
import {SafeurlPipe} from "../../shared/pipes/safeurl.pipe";

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SafeurlPipe
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

  createEmbedLink(url: string) {
    const urlTest  = new URL(url);
    const decodedURI = urlTest.search = decodeURIComponent(urlTest.search);
    const id = decodedURI.replace('?v=', '');
    return `https://www.youtube.com/embed/${id}`;
  }
}
