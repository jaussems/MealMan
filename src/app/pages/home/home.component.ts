import {Component, OnInit} from '@angular/core';
import {DataService} from "../../shared/services/data.service";
import {Ingredient, Meal} from "../../shared/interfaces/api";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  searchFormGroup = new FormGroup({
    search  : new FormControl<string>('')
  })
  data$?: Ingredient;
  meals$?: Meal;

constructor(private _dataService: DataService, private _router: Router) {
  this.searchFormGroup.controls['search']?.valueChanges
    .pipe(
      debounceTime(1000), // Adjust the delay time as needed
      distinctUntilChanged(), // Only emit if the value has changed
      switchMap((value) => {
        console.log(`Input Value: ${value}`);
        let concat = value?.replace(' ', '_').trim().toLowerCase() ?? '';
        return this._dataService.getMealsPerMainIngredient(concat);
      })
    )
    .subscribe((data) => {
      this.meals$ = data;
      console.log(`Meals with main ingredients: ${data}`);
    });
}
ngOnInit() {
  this.getData();

}
navigateToRecipePage(recipeId: string) {
    this._router.navigateByUrl(`home/${recipeId}`)
}

getData() {
    this._dataService.getAllIngredients().subscribe((data: Ingredient) => {
      this.data$ = data;
    })
}
}
