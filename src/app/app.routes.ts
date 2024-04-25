import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {RecipeComponent} from "./pages/recipe/recipe.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/:recipeId', component: RecipeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];
