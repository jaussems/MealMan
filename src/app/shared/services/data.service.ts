import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient, IRecipeByID, Meal} from "../interfaces/api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://themealdb.com/api/json/v1/1/';
  constructor(private http: HttpClient) { }

  getAllIngredients():Observable<Ingredient> {
    return this.http.get<Ingredient>(`${this.apiUrl}list.php?i=list`);
  }

  getMealsPerMainIngredient(ingredient: string):Observable<Meal> {
    return this.http.get<Meal>(`${this.apiUrl}filter.php?i=${ingredient}`);
  }

  getRecipeById(mealId: string) {
    return this.http.get<Meal>(`${this.apiUrl}lookup.php?i=${mealId}`)
  }


}
